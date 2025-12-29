const inputText = document.getElementById("inputtext");
const botaoGerar = document.getElementById("botaoGerar");
const resultado = document.getElementById("resultado");

const qrArea = document.getElementById("qrArea");
const qrImagem = document.getElementById("qrImagem");

botaoGerar.addEventListener("click", function () {

    const valorDigitado = inputText.value.trim();

    if (valorDigitado === "") {
        mostrarAlerta("Digite algum texto para gerar o QR Code.", "erro");
        resultado.innerText = "";
        qrImagem.src = "";
        qrArea.classList.add("oculto");
        return;
    }

    mostrarAlerta("Texto válido! QR Code será gerado.", "sucesso");
    resultado.innerText = valorDigitado;
    const urlQR = "https://quickchart.io/qr?size=200&text=" +
        encodeURIComponent(valorDigitado);

    qrImagem.src = urlQR;
    qrArea.classList.remove("oculto");
});



const alerta = document.getElementById("alerta");

function mostrarAlerta(mensagem, tipo) {
    alerta.innerText = mensagem;
    alerta.className = `alerta ${tipo}`;
}


mostrarAlerta("Bem-vindo ao Gerador de QR Code!", "sucesso");