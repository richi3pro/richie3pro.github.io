document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const cookiesContainer = document.getElementById("cookiesContainer");
    const fortuneMessageContainer = document.getElementById("fortuneMessage");
    const fortuneMessageText = fortuneMessageContainer.querySelector("p");
    const fortuneCookies = document.querySelectorAll(".fortuneCookie");

    const fortunes = [
        "La suerte favorece a los audaces.",
        "La vida es corta, disfrútala al máximo.",
        "Hoy es un buen día para empezar algo nuevo.",
        "El éxito está en tu camino, no lo dejes pasar.",
        "La felicidad llega cuando menos la esperas.",
        "Tu mayor fortaleza es la paciencia.",
        "Al final del túnel siempre hay luz.",
        "Las oportunidades no aparecen, las creas.",
        "Escucha tu intuición, te guiará bien.",
        "Cada día es una nueva oportunidad para aprender algo nuevo.",
        "Hoy es el día perfecto para hacer algo inesperado… ¡como dormir cinco minutos más!",
        "El Wi-Fi de la vida a veces es lento, pero la paciencia lo conecta todo.",
        "Tu próxima aventura está a la vuelta de la esquina. ¡Asegúrate de llevar calcetines limpios!",
        "Si el plan A no funciona, no te preocupes, el abecedario tiene muchas más letras.",
        "El universo está conspirando a tu favor… solo que se tomó un pequeño descanso para almorzar.",
        "Tu próxima comida te hará tan feliz como un perro viendo caer un trozo de carne al suelo.",
        "A veces, la mejor solución es bailar como si nadie te estuviera viendo. ¡Hazlo hoy!",
        "Alguien en este momento está pensando en ti… ¿o tal vez en pizza? Difícil de decir.",
        "Si la vida te da limones… ¡haz limonada y véndela con una sonrisa!",
        "El secreto del éxito está en intentarlo una vez más… ¡o en tener una buena playlist!",
        "El futuro se ve brillante… especialmente si encuentras tus gafas de sol.",
        "Nunca subestimes el poder de un buen abrazo. O de una siesta. O de un abrazo durante una siesta.",
        "Hoy es el día para decir sí… ¡excepto si te ofrecen trabajo sin paga!",
        "Tu próxima decisión importante será más fácil de tomar si tienes un café en la mano.",
        "El mejor camino hacia la felicidad suele incluir una buena dosis de chocolate.",
        "La vida es como un rompecabezas. A veces, una pieza simplemente no encaja… ¡es la oportunidad perfecta para inventar una nueva!",
        "Eres tan increíble que deberías tener tu propio programa de televisión. ¡En horario estelar!",
        "El destino te tiene preparada una sorpresa... ¡solo asegúrate de que sea algo divertido!",
        "El próximo lunes será más fácil de sobrellevar si empiezas a planearlo el domingo con una siesta.",
        "La mejor forma de encontrar el camino correcto es perderte un poquito primero."
    ];

    startButton.addEventListener("click", () => {
        cookiesContainer.classList.remove("hidden");
        fortuneMessageContainer.classList.add("hidden");
        startButton.classList.add("hidden"); // Oculta el botón "Iniciar"
    });

    fortuneCookies.forEach(cookie => {
        cookie.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            const fortune = fortunes[randomIndex];
            fortuneMessageText.textContent = fortune;
            fortuneMessageContainer.classList.remove("hidden");
            cookiesContainer.classList.add("hidden");
        });
    });
});
