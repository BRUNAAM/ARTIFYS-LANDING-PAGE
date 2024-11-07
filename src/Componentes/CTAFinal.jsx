import "./CTAFinal.css";

function CTAFinal() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "5543996196266"; 
        const message = "Olá, gostaria de saber mais sobre como transformar minha marca!";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="cta-final" className="cta-final">
            <h2>Pronto para transformar sua marca?</h2>
            <button onClick={handleWhatsAppClick}>
                ENTRE EM CONTATO AGORA</button>
        </section>
    );
}

export default CTAFinal;