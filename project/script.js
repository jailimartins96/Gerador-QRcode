// === ELEMENTOS DO DOM ===
const inputTexto = document.getElementById('texto');
const botaoGerar = document.getElementById('botaoGerar');
const alerta = document.getElementById('alerta');
const qrArea = document.getElementById('qrArea');
const qrImagem = document.getElementById('qrImagem');
const btnDownload = document.getElementById('btnDownload');

// === FUNÇÕES DE UI ===
function limparAlerta() {
  alerta.classList.add('d-none');
  alerta.textContent = '';
}

function mostrarAlerta(mensagem, tipo) {
  alerta.textContent = mensagem;

  alerta.classList.remove(
    'd-none',
    'alert-success',
    'alert-danger',
    'alert-warning'
  );

  alerta.classList.add('alert', `alert-${tipo}`);
}

function setLoading(ativo) {
  if (ativo) {
    botaoGerar.disabled = true;
    botaoGerar.innerHTML = `
      <span class="spinner-border spinner-border-sm"></span>
      Gerando...
    `;
  } else {
    botaoGerar.disabled = false;
    botaoGerar.textContent = 'Gerar QR Code';
  }
}

// === LÓGICA PRINCIPAL ===
function gerarQRCode() {
  limparAlerta();

  const texto = inputTexto.value.trim();

  if (texto === "") {
    mostrarAlerta("Preencha o campo antes de gerar", "warning");
    return;
  }

  setLoading(true);
  qrArea.classList.add('d-none');

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(texto)}`;

  qrImagem.src = url;

  qrImagem.onload = () => {
    qrArea.classList.remove('d-none');
    btnDownload.href = url;
    btnDownload.classList.remove('d-none');

    mostrarAlerta("QR Code gerado com sucesso!", "success");
    setLoading(false);
    inputTexto.value = "";
  };

  qrImagem.onerror = () => {
    mostrarAlerta("Erro ao gerar QR Code", "danger");
    setLoading(false);
  };
}

// === EVENTOS ===
botaoGerar.addEventListener('click', gerarQRCode);
