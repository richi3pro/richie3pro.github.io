document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');

    const gridSize = 20; // Tamaño de cada bloque de la serpiente y la comida
    const tileCount = canvas.width / gridSize;

    let snake = [{ x: 10, y: 10 }]; // Posición inicial de la serpiente
    let food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) }; // Posición inicial de la comida
    let direction = { x: 0, y: 0 }; // Dirección inicial
    let score = 0;

    function gameLoop() {
        // Mover la serpiente
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        // Comprobar si la serpiente ha comido la comida
        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreElement.textContent = score;
            // Generar nueva posición para la comida
            food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
        } else {
            snake.pop(); // Eliminar la última parte del cuerpo si no ha comido
        }

        // Comprobar colisiones con las paredes o con el propio cuerpo
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || checkCollision()) {
            resetGame(); // Reiniciar el juego si colisiona
        }

        drawGame(); // Dibujar el estado actual del juego
    }

    function drawGame() {
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar la serpiente
        snake.forEach(part => {
            ctx.fillStyle = 'lime';
            ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
        });

        // Dibujar la comida
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    function checkCollision() {
        // Verificar si la cabeza de la serpiente colisiona con alguna parte de su cuerpo
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        // Reiniciar el estado del juego
        snake = [{ x: 10, y: 10 }];
        direction = { x: 0, y: 0 };
        score = 0;
        scoreElement.textContent = score;
        food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
    }

    // Manejar la entrada del usuario para cambiar la dirección de la serpiente
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
        }
    });

    // Iniciar el bucle del juego
    setInterval(gameLoop, 100); // Actualizar el juego cada 100ms
});
document.getElementById('upBtn').addEventListener('click', () => {
    if (direction !== 'DOWN') {
        direction = 'UP';
    }
});

document.getElementById('downBtn').addEventListener('click', () => {
    if (direction !== 'UP') {
        direction = 'DOWN';
    }
});

document.getElementById('leftBtn').addEventListener('click', () => {
    if (direction !== 'RIGHT') {
        direction = 'LEFT';
    }
});

document.getElementById('rightBtn').addEventListener('click', () => {
    if (direction !== 'LEFT') {
        direction = 'RIGHT';
    }
});
