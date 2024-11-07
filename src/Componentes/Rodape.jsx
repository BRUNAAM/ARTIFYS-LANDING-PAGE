import "./Rodape.css";

function Rodape() {
    return (
        <footer className="rodape">
            <p>Desenvolvido por [Bruna Amaro da Silva]</p>
            <div className="redes-sociais">
                <a href="https://www.instagram.com/artifys_identidade_visual_mkt" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61566484996663" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/facebook.png" alt="Facebook" />
                </a>
            </div>
        </footer>
    );
}

export default Rodape;