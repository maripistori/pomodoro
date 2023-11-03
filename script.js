let temporizador; 
let modoPomodoro = true; 
let minutos = 20; 
let segundos = 0; 

const botaoIniciar = document.getElementById("botaoIniciar");

function atualizarExibicaoTemporizador() {
    document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
    document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
}

function iniciarTemporizador() {
    
    temporizador = setInterval(function() {
        if (minutos === 0 && segundos === 0) {
            
            if (modoPomodoro) {
                minutos = 5; 
                modoPomodoro = false; 
            } else {
                minutos = 20; 
                modoPomodoro = true; // Alterna de volta para o modo Pomodoro
            }
        } else if (segundos === 0) {
        
            minutos--;
            segundos = 59;
        } else {
            segundos--; 
        }

        atualizarExibicaoTemporizador(); 
    }, 1000); 

    botaoIniciar.disabled = true; // Desabilita o botão "Iniciar" para evitar múltiplas inicializações do temporizador
}


botaoIniciar.addEventListener("click", iniciarTemporizador);
