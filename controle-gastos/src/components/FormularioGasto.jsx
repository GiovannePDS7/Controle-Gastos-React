function FormularioGasto({
  categorias,
  descricao,
  valor,
  categoria,
  mensagemErro,
  aoMudarDescricao,
  aoMudarValor,
  aoMudarCategoria,
  aoAdicionarGasto,
}) {
  return (
    <section>
      <h2>Novo gasto</h2>

      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}

      <form className="formulario-gasto" onSubmit={aoAdicionarGasto}>
        <label className="campo-formulario" htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            name="descricao"
            type="text"
            placeholder="Ex.: Almoço no trabalho"
            value={descricao}
            onChange={(evento) => aoMudarDescricao(evento.target.value)}
          />
        </label>

        <label className="campo-formulario" htmlFor="valor">
          Valor
          <input
            id="valor"
            name="valor"
            type="text"
            placeholder="R$ 0,00"
            inputMode="decimal"
            value={valor}
            onChange={(evento) => aoMudarValor(evento.target.value)}
          />
        </label>

        <label className="campo-formulario" htmlFor="categoria">
          Categoria
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(evento) => aoMudarCategoria(evento.target.value)}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="botao-primario">
          Adicionar gasto
        </button>
      </form>
    </section>
  )
}

export default FormularioGasto
