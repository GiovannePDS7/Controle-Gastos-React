import { useEffect, useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import FiltroGastos from './components/FiltroGastos'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const CHAVE_GASTOS_LOCAL_STORAGE = 'controle-gastos:gastos'

const gastosIniciais = [
  {
    id: 1,
    descricao: 'Supermercado do mês',
    categoria: 'Alimentação',
    valorNumero: 320,
    valorFormatado: 'R$ 320,00',
  },
  {
    id: 2,
    descricao: 'Passe mensal de ônibus',
    categoria: 'Transporte',
    valorNumero: 180,
    valorFormatado: 'R$ 180,00',
  },
  {
    id: 3,
    descricao: 'Cinema no fim de semana',
    categoria: 'Lazer',
    valorNumero: 75.5,
    valorFormatado: 'R$ 75,50',
  },
]

function carregarGastosSalvos() {
  try {
    const gastosSalvos = localStorage.getItem(CHAVE_GASTOS_LOCAL_STORAGE)

    if (!gastosSalvos) {
      return gastosIniciais
    }

    const gastosParseados = JSON.parse(gastosSalvos)

    if (!Array.isArray(gastosParseados)) {
      return gastosIniciais
    }

    return gastosParseados
  } catch {
    return gastosIniciais
  }
}

function converterTextoEmValor(textoValor) {
  const textoLimpo = textoValor.trim()

  if (!textoLimpo || !/^[0-9.,]+$/.test(textoLimpo)) {
    return null
  }

  const ultimoPonto = textoLimpo.lastIndexOf('.')
  const ultimaVirgula = textoLimpo.lastIndexOf(',')
  const separadorDecimal = ultimoPonto > ultimaVirgula ? '.' : ','

  let textoNormalizado = textoLimpo

  if (ultimoPonto !== -1 || ultimaVirgula !== -1) {
    if (separadorDecimal === ',') {
      textoNormalizado = textoNormalizado.replace(/\./g, '').replace(',', '.')
    } else {
      textoNormalizado = textoNormalizado.replace(/,/g, '')
    }
  }

  if ((textoNormalizado.match(/\./g) ?? []).length > 1) {
    return null
  }

  const valorNumero = Number(textoNormalizado)

  if (Number.isNaN(valorNumero)) {
    return null
  }

  return valorNumero
}

function App() {
  const [categorias] = useState([
    'Alimentação',
    'Transporte',
    'Lazer',
    'Outros',
  ])

  const [gastos, setGastos] = useState(() => carregarGastosSalvos())

  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState(categorias[0])
  const [filtroCategoria, setFiltroCategoria] = useState('Todas')
  const [filtroDescricao, setFiltroDescricao] = useState('')
  const [filtroValorMinimo, setFiltroValorMinimo] = useState('')
  const [filtroValorMaximo, setFiltroValorMaximo] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')

  const valorMinimoNumero =
    filtroValorMinimo.trim() === '' ? null : converterTextoEmValor(filtroValorMinimo)
  const valorMaximoNumero =
    filtroValorMaximo.trim() === '' ? null : converterTextoEmValor(filtroValorMaximo)

  const gastosFiltrados = gastos.filter((gasto) => {
    const correspondeCategoria =
      filtroCategoria === 'Todas' || gasto.categoria === filtroCategoria

    const descricaoGasto = gasto.descricao.toLowerCase()
    const filtroDescricaoLimpo = filtroDescricao.trim().toLowerCase()
    const correspondeDescricao = descricaoGasto.includes(filtroDescricaoLimpo)

    const correspondeValorMinimo =
      valorMinimoNumero === null || gasto.valorNumero >= valorMinimoNumero
    const correspondeValorMaximo =
      valorMaximoNumero === null || gasto.valorNumero <= valorMaximoNumero

    return (
      correspondeCategoria &&
      correspondeDescricao &&
      correspondeValorMinimo &&
      correspondeValorMaximo
    )
  })

  const totalNumero = gastosFiltrados.reduce(
    (acumulador, gasto) => acumulador + gasto.valorNumero,
    0,
  )
  const totalFormatado = formatadorMoeda.format(totalNumero)

  useEffect(() => {
    localStorage.setItem(CHAVE_GASTOS_LOCAL_STORAGE, JSON.stringify(gastos))
  }, [gastos])

  function aoMudarValor(textoValor) {
    if (/^[0-9.,]*$/.test(textoValor)) {
      setValor(textoValor)
    }
  }

  function aoMudarFiltroValorMinimo(textoValor) {
    if (/^[0-9.,]*$/.test(textoValor)) {
      setFiltroValorMinimo(textoValor)
    }
  }

  function aoMudarFiltroValorMaximo(textoValor) {
    if (/^[0-9.,]*$/.test(textoValor)) {
      setFiltroValorMaximo(textoValor)
    }
  }

  function aoAdicionarGasto(evento) {
    evento.preventDefault()
    setMensagemErro('')

    const descricaoLimpa = descricao.trim()

    if (!descricaoLimpa) {
      setMensagemErro('A descrição é obrigatória.')
      return
    }

    const valorNumero = converterTextoEmValor(valor)

    if (valorNumero === null || valorNumero <= 0) {
      setMensagemErro('O valor deve ser maior que zero.')
      return
    }

    const novoGasto = {
      id: Date.now(),
      descricao: descricaoLimpa,
      categoria,
      valorNumero,
      valorFormatado: formatadorMoeda.format(valorNumero),
    }

    setGastos((gastosAtuais) => [novoGasto, ...gastosAtuais])
    setDescricao('')
    setValor('')
    setCategoria(categorias[0])
  }

  function aoRemoverGasto(idGasto) {
    setGastos((gastosAtuais) =>
      gastosAtuais.filter((gasto) => gasto.id !== idGasto),
    )
  }

  return (
    <main className="pagina-gastos">
      <header className="cabecalho-pagina">
        <h1>Controle de Gastos</h1>
        <p>Organize suas despesas em um só lugar.</p>
      </header>

      <section className="secoes-gastos">
        <div className="card-secao">
          <FormularioGasto
            categorias={categorias}
            descricao={descricao}
            valor={valor}
            categoria={categoria}
            mensagemErro={mensagemErro}
            aoMudarDescricao={setDescricao}
            aoMudarValor={aoMudarValor}
            aoMudarCategoria={setCategoria}
            aoAdicionarGasto={aoAdicionarGasto}
          />
        </div>

        <div className="card-secao">
          <FiltroGastos
            categorias={categorias}
            filtroCategoria={filtroCategoria}
            filtroDescricao={filtroDescricao}
            filtroValorMinimo={filtroValorMinimo}
            filtroValorMaximo={filtroValorMaximo}
            aoMudarFiltroCategoria={setFiltroCategoria}
            aoMudarFiltroDescricao={setFiltroDescricao}
            aoMudarFiltroValorMinimo={aoMudarFiltroValorMinimo}
            aoMudarFiltroValorMaximo={aoMudarFiltroValorMaximo}
          />
        </div>

        <div className="card-secao">
          <ListaGastos gastos={gastosFiltrados} aoRemoverGasto={aoRemoverGasto} />
        </div>

        <div className="card-secao">
          <TotalGastos totalFormatado={totalFormatado} />
        </div>
      </section>
    </main>
  )
}

export default App
