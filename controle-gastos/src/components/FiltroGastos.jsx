function FiltroGastos({
  categorias,
  filtroCategoria,
  filtroDescricao,
  filtroValorMinimo,
  filtroValorMaximo,
  aoMudarFiltroCategoria,
  aoMudarFiltroDescricao,
  aoMudarFiltroValorMinimo,
  aoMudarFiltroValorMaximo,
}) {
  return (
    <section>
      <div className="cabecalho-filtros">
        <h2>Filtros</h2>
        <span className="simbolo-filtro" aria-hidden="true" title="Filtro">
          ⌕
        </span>
      </div>

      <div className="filtros-gastos">
        <label className="campo-formulario" htmlFor="filtro-descricao">
          Buscar por nome
          <input
            id="filtro-descricao"
            name="filtro-descricao"
            type="text"
            placeholder="Ex.: supermercado"
            value={filtroDescricao}
            onChange={(evento) => aoMudarFiltroDescricao(evento.target.value)}
          />
        </label>

        <label className="campo-formulario" htmlFor="filtro-categoria">
          Categoria
          <select
            id="filtro-categoria"
            name="filtro-categoria"
            value={filtroCategoria}
            onChange={(evento) => aoMudarFiltroCategoria(evento.target.value)}
          >
            <option value="Todas">Todas</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>

        <label className="campo-formulario" htmlFor="filtro-valor-minimo">
          Valor mínimo
          <input
            id="filtro-valor-minimo"
            name="filtro-valor-minimo"
            type="text"
            placeholder="Ex.: 50,00"
            inputMode="decimal"
            value={filtroValorMinimo}
            onChange={(evento) => aoMudarFiltroValorMinimo(evento.target.value)}
          />
        </label>

        <label className="campo-formulario" htmlFor="filtro-valor-maximo">
          Valor máximo
          <input
            id="filtro-valor-maximo"
            name="filtro-valor-maximo"
            type="text"
            placeholder="Ex.: 300,00"
            inputMode="decimal"
            value={filtroValorMaximo}
            onChange={(evento) => aoMudarFiltroValorMaximo(evento.target.value)}
          />
        </label>
      </div>
    </section>
  )
}

export default FiltroGastos
