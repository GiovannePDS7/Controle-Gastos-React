function ListaGastos({ gastos }) {
  return (
    <section>
      <h2>Lista de gastos</h2>

      <ul className="lista-gastos">
        {gastos.map((gasto) => (
          <li key={gasto.id} className="item-gasto">
            <div>
              <p className="descricao-gasto">{gasto.descricao}</p>
              <p className="categoria-gasto">{gasto.categoria}</p>
            </div>
            <p className="valor-gasto">{gasto.valorFormatado}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListaGastos
