import "./Formulario.css"


function Formulario() {
    return (
        <div id="formulario" className="content-section">
            <h2>Se você quer uma demonstração dos nossos trabalhos, ficaremos muito felizes em te aprensentar. Entraremos em contato</h2>
            <form className="formulario">
                <div className="form-group">
                    <label htmlFor="nome">Nome Completo: </label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="tel" id="telefone" name="telefone" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="cidade">Cidade: </label>
                    <input type="text" id="cidade" name="cidade" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <br />
                <br />
                <div className="form-group">
                    <label htmlFor="observacao">Observação: </label>
                    <input type="text" id="observacao" name="observacao" required />
                </div>
                <br />
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;