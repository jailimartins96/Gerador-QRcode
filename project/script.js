const inputText = document.getElementById("inputtext");
const botaoGerar = document.getElementById("botaoGerar");
const resultado = document.getElementById("resultado");



botaoGerar.addEventListener("click", function () {

    const valorDigitado = inputText.value.trim();

    if (valorDigitado === "") {
        mostrarAlerta("Digite algum texto para gerar o QR Code.", "erro");
        resultado.innerText = "";
        return;
    }

    mostrarAlerta("Texto válido! QR Code será gerado.", "sucesso");
    resultado.innerText = valorDigitado;
    return;
});




const alerta = document.getElementById("alerta");

function mostrarAlerta(mensagem, tipo) {
    alerta.innerText = mensagem;
    alerta.className = `alerta ${tipo}`;
}
