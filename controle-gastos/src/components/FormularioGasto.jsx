function FormularioGasto({ categorias }) {
  return (
    <section>
      <h2>Novo gasto</h2>

      <form className="formulario-gasto">
        <label className="campo-formulario" htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            name="descricao"
            type="text"
            placeholder="Ex.: Almoço no trabalho"
          />
        </label>

        <label className="campo-formulario" htmlFor="valor">
          Valor
          <input id="valor" name="valor" type="text" placeholder="R$ 0,00" />
        </label>

        <label className="campo-formulario" htmlFor="categoria">
          Categoria
          <select id="categoria" name="categoria" defaultValue="">
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>

        <button type="button" className="botao-primario">
          Adicionar gasto
        </button>
      </form>
    </section>
  )
}

export default FormularioGasto
