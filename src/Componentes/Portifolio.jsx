import "./Portifolio.css"
import logocaferavar from '../assets/logocaferavar.png';


function Portifolio() {
    return (
        <section id="portifolio" className="portifolio">
            <h2>Veja nosso trabalho em ação</h2>
            <div className="galeria">
                <img src={logocaferavar} alt="img" />
            </div>
        </section>
    );
}

export default Portifolio;
