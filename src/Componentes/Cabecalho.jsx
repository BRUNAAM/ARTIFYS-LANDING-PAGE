import "./Cabecalho.css"
import logo from '../assets/logo.png';


function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="logo">
                <img src={logo} alt="IMG NAO ENCONTRADA" className="imglogo"/>
            </div>
            <nav>
                <ul>
                    <li><a href="#servico">Serviço</a></li>
                    <li><a href="#beneficios">Benefícios</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Cabecalho;