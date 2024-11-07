import "./Rodape.css";

function Rodape() {
    return (
        <footer className="rodape">
            <div className="redes-sociais">
                <h2>Siga nossas redes socias, e fique por dentro de todos conteúdos</h2>
                <a href="https://www.instagram.com/artifys_identidade_visual_mkt" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/Instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61566484996663" target="_blank" rel="noopener noreferrer">
                    <img src="src/assets/facebook.png" alt="Facebook" />
                </a>
                <br /><br /><br />
                <p>Desenvolvido por [Bruna Amaro da Silva]</p>
            </div>
        </footer>
    );
}

export default Rodape;