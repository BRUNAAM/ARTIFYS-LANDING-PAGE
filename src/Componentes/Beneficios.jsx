import "./Beneficios.css"

function Beneficios() {
    return (
        <section id="beneficios" className="beneficios">
            <h2>Por que investir em uma identidade visual?</h2>
            <div className="beneficio-lista">
                <div className="beneficio-item">
                    <h3>Primeira Impressão Inesquecível</h3>
                    <p>Tenha uma marca que se destaca.</p>
                </div>
                <div className="beneficio-item">
                    <h3>Conexão com Seu Público-Alvo</h3>
                    <p>Atraia o cliente certo.</p>
                </div>
                <div className="beneficio-item">
                    <h3>Profissionalismo e Credibilidade</h3>
                    <p>Fortaleça a confiança em sua marca.</p>
                </div>
                <div className="beneficio-item">
                    <h3>Diferenciação no Mercado</h3>
                    <p>Destaque-se entre os concorrentes.</p>
                </div>
            </div>
        </section>
    );
}

export default Beneficios;