import "./Hero.css";

function Hero() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "5543996196266"; 
        const message = "Olá, gostaria de solicitar uma consulta grátis!";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section className="hero">
            <h1>Destaque a sua marca com uma identidade visual que encanta!
                <br />
                <br /><br />

            </h1>
            <p>Sua empresa merece uma identidade visual profissional que transmita credibilidade e conquiste clientes.</p>
            <button onClick={handleWhatsAppClick}>SOLICITE UMA CONSULTA GRATIS</button>
        </section>
    );
}

export default Hero;
