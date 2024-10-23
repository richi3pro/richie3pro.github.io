document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const cookiesContainer = document.getElementById("cookiesContainer");
    const fortuneMessageContainer = document.getElementById("fortuneMessage");
    const fortuneMessageText = fortuneMessageContainer.querySelector("p");
    const fortuneCookies = document.querySelectorAll(".fortuneCookie");

    const fortunes = [
        "El éxito es como la calidad en el TecNM: siempre es medible y mejora con cada paso.",
        "Hoy estarás tan eficiente como un sistema de gestión de la calidad bien auditado.",
        "La innovación está en tu ADN… ¡como en los Institutos del TecNM!",
        "Trabajar en equipo es la clave del éxito… pregúntale a cualquier tecnológico.",
        "En el TecNM, el compromiso no es opcional… ¡y hoy lo harás sentir en todo lo que hagas!",
        "El ambiente laboral ideal no se encuentra… ¡se construye, como en los tecnológicos!",
        "Hoy es tu día para brillar… ¡así como los indicadores de calidad en los procesos del TecNM!",
        "La función pública no es fácil, pero hoy te sentirás tan organizado como una auditoría de calidad.",
        "Si no puedes cambiar el mundo hoy, al menos asegúrate de cumplir con los estándares del TecNM.",
        "El futuro pertenece a los que gestionan su tiempo… y su calidad.",
        "El TecNM no solo es educación… ¡es liderazgo en acción!",
        "Hoy serás tan adaptable como un tecnológico en plena expansión.",
        "Hoy será tan productivo como una junta del sistema de gestión de calidad.",
        "En el TecNM, la educación es sinónimo de progreso… ¡y hoy progresarás como nunca!",
        "La clave del éxito es la mejora continua… ¡como en cualquier proceso!",
        "Hoy harás algo tan épico... que nadie lo creerá cuando lo cuentes.",
        "No es que estés tarde, es que el mundo va demasiado rápido.",
        "Tus ideas son tan brillantes que deberías cobrar por cada pensamiento.",
        "Hoy tienes más posibilidades de conquistar el mundo... o al menos la nevera.",
        "El karma te tiene en la mira… pero tranquilo, trae pizza.",
        "Alguien está hablando de ti… ¡y sí, es algo bueno!",
        "Eres un diamante en bruto… pero te falta pulir el humor.",
        "Hoy vas a romper corazones… o tal vez solo rompas el internet.",
        "El secreto del éxito es un café bien cargado y una sonrisa medio pícara.",
        "Hoy será tu día de suerte… ¡si te levantas antes del mediodía!",
        "Tu futuro es brillante… aunque tus decisiones a veces sean algo cuestionables.",
        "Es hora de dejar de procrastinar… pero, claro, puedes empezar mañana.",
        "Tu sonrisa tiene más poder que el Wi-Fi de la oficina, ¡úsala!",
        "Vas a llegar lejos, pero primero tendrás que salir de la cama.",
        "La vida es corta… ¡así que mejor pídele el postre primero!",
        "Tienes más estilo que nadie... pero igual revisa ese peinado.",
        "Hoy conquistarás el mundo… o al menos conseguirás un buen meme.",
        "El destino te tiene preparado algo increíble… si logras encontrar las llaves.",
        "Estás a un paso de la grandeza… o de una siesta épica.",
        "El futuro es tuyo… solo trata de no perderlo en el camino.",
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
