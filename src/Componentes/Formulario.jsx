import "./Formulario.css";
import db from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Formulario() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const nome = e.target.nome.value;
        const telefone = e.target.telefone.value;
        const cidade = e.target.cidade.value;
        const email = e.target.email.value;
        const observacao = e.target.observacao.value;

        try {
            await addDoc(collection(db, "formularios"), {
                nome,
                telefone,
                cidade,
                email,
                observacao,
            });
            alert("Formulário enviado com sucesso!");
            e.target.reset();
        } catch (e) {
            console.error("Erro ao enviar formulário: ", e);
            alert("Erro ao enviar o formulário. Tente novamente mais tarde.");
        }
    };

    return (
        <div id="formulario" className="content-section">
            <h2>Se você quer uma demonstração dos nossos trabalhos, ficaremos muito felizes em te apresentar. Entraremos em contato</h2>
            <form className="formulario" onSubmit={handleSubmit}>
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
