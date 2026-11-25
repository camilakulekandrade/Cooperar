// Botão Ler Mais / Ler Menos
function alternarTexto() {
    const bloco = document.getElementById('mais-detalhes');
    const botao = document.getElementById('btn-ler-mais');
    
    bloco.classList.toggle('aberto');
    
    if (bloco.classList.contains('aberto')) {
        botao.innerHTML = '🔼 Recolher detalhes dos projetos';
    } else {
        botao.innerHTML = '📖 Ler mais sobre os projetos (Feira e Estufa de Morangos)';
    }
}

// Botão para alternar enquadramento da foto (Cortar para preencher vs Mostrar foto inteira)
let fotoInteira = false;
function alternarZoomFoto() {
    const wrapper = document.querySelector('.foto-feira-wrapper');
    const img = document.getElementById('foto-feira');
    
    fotoInteira = !fotoInteira;
    if (fotoInteira) {
        wrapper.style.aspectRatio = 'auto';
        wrapper.style.maxHeight = 'none';
        img.style.objectFit = 'contain';
    } else {
        wrapper.style.aspectRatio = '4 / 3';
        wrapper.style.maxHeight = '420px';
        img.style.objectFit = 'cover';
    }
}

// Adicionar mensagem das caixas de texto ao mural
function enviarSugestao(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const vinculo = document.getElementById('vinculo').value;
    const cultura = document.getElementById('cultura').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) return;

    const mural = document.getElementById('mural-respostas');
    const novoItem = document.createElement('div');
    novoItem.className = 'item-mural';

    const tagCultura = cultura ? ` • 🌱 Sugestão: <strong>${cultura}</strong>` : '';

    novoItem.innerHTML = `
        <strong>${nome}</strong>
        <small>${vinculo}${tagCultura}</small>
        <p style="margin-bottom: 0;">${mensagem}</p>
    `;

    mural.prepend(novoItem);
    limparFormulario();
}

// Limpar caixas de texto
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('cultura').value = '';
    document.getElementById('mensagem').value = '';
}