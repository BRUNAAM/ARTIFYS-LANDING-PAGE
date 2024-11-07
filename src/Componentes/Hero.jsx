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
            <h1>Destaque a sua marca com um visual que encanta, 
                desenvolvemos sua identidade sem perder a sua essência!
                <br />
                <br /><br />

            </h1>
            <h3>Sua empresa merece uma identidade visual profissional que transmita credibilidade e conquiste clientes.</h3>
            <button onClick={handleWhatsAppClick}>SOLICITE UMA CONSULTA GRATIS</button>
        </section>
    );
}

export default Hero;
