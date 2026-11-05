function TotalGastos({ totalFormatado }) {
  return (
    <section>
      <h2>Total</h2>
      <p className="rotulo-total">Total de gastos</p>
      <p className="valor-total">{totalFormatado}</p>
    </section>
  )
}

export default TotalGastos
