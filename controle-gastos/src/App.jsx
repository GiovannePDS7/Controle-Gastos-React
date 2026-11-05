import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

function App() {
  const [categorias] = useState([
    'Alimentação',
    'Transporte',
    'Lazer',
    'Outros',
  ])

  const [gastos] = useState([
    {
      id: 1,
      descricao: 'Supermercado do mês',
      categoria: 'Alimentação',
      valorFormatado: 'R$ 320,00',
    },
    {
      id: 2,
      descricao: 'Passe mensal de ônibus',
      categoria: 'Transporte',
      valorFormatado: 'R$ 180,00',
    },
    {
      id: 3,
      descricao: 'Cinema no fim de semana',
      categoria: 'Lazer',
      valorFormatado: 'R$ 75,50',
    },
  ])

  const [totalFormatado] = useState('R$ 575,50')

  return (
    <main className="pagina-gastos">
      <header className="cabecalho-pagina">
        <h1>Controle de Gastos</h1>
        <p>Organize suas despesas em um só lugar.</p>
      </header>

      <section className="secoes-gastos">
        <div className="card-secao">
          <FormularioGasto categorias={categorias} />
        </div>

        <div className="card-secao">
          <ListaGastos gastos={gastos} />
        </div>

        <div className="card-secao">
          <TotalGastos totalFormatado={totalFormatado} />
        </div>
      </section>
    </main>
  )
}

export default App
