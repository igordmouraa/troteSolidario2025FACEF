// Função para calcular os pontos totais
function calcularPontos() {
    // Obter valores dos inputs
    const mascote = parseInt(document.getElementById('mascote').value) || 0;
    const homenagem = parseInt(document.getElementById('homenagem').value) || 0;
    const arrecadacao = parseInt(document.getElementById('arrecadacao').value) || 0;
    const doacaoSangue = parseInt(document.getElementById('doacao-sangue').value) || 0;
    const provasEsportivas = parseInt(document.getElementById('provas-esportivas').value) || 0;
    const provasCulturais = parseInt(document.getElementById('provas-culturais').value) || 0;
    const provasConhecimento = parseInt(document.getElementById('provas-conhecimento').value) || 0;
    const tarefasSolidarias = parseInt(document.getElementById('tarefas-solidarias').value) || 0;
    const integracao = parseInt(document.getElementById('integracao').value) || 0;
    const criatividade = parseInt(document.getElementById('criatividade').value) || 0;

    // Calcular totais por categoria
    const totalEsportes = mascote + homenagem + provasEsportivas;
    const totalSolidariedade = arrecadacao + doacaoSangue + tarefasSolidarias;
    const totalCultural = provasCulturais + provasConhecimento + criatividade;
    const totalIntegracao = integracao;

    // Calcular total geral
    const totalGeral = totalEsportes + totalSolidariedade + totalCultural + totalIntegracao;

    // Atualizar os totais na tela
    document.getElementById('total-esportes').textContent = totalEsportes;
    document.getElementById('total-solidariedade').textContent = totalSolidariedade;
    document.getElementById('total-cultural').textContent = totalCultural;
    document.getElementById('total-integracao').textContent = totalIntegracao;
    document.getElementById('total-geral').textContent = totalGeral;

    // Mostrar a seção de resultados
    document.getElementById('resultados').classList.remove('hidden');
}

// Função para resetar o formulário
function resetarCalculadora() {
    document.getElementById('calculadora-form').reset();
    document.getElementById('resultados').classList.add('hidden');
    
    // Resetar todas as barras de progresso
    document.querySelectorAll('.progress-fill').forEach(progress => {
        progress.style.width = '0%';
        progress.className = 'progress-fill bg-red-500';
    });
}

// Event listeners para inputs numéricos
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        const max = parseInt(this.max) || 100;
        const value = parseInt(this.value) || 0;
        const percentage = Math.min((value / max) * 100, 100);
        const progressId = 'progress-' + this.id;
        const progressElement = document.getElementById(progressId);
        
        if (progressElement) {
            progressElement.style.width = percentage + '%';
            
            // Mudar cor conforme preenchimento
            if (percentage < 30) {
                progressElement.className = 'progress-fill bg-red-500';
            } else if (percentage < 70) {
                progressElement.className = 'progress-fill bg-yellow-500';
            } else {
                progressElement.className = 'progress-fill bg-green-500';
            }
        }
    });
});

// Event listener para o botão de calcular
document.getElementById('calcular-btn').addEventListener('click', calcularPontos);

// Event listener para o botão de resetar
document.getElementById('resetar-btn').addEventListener('click', resetarCalculadora);

// Inicialização - esconder a seção de resultados ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resultados').classList.add('hidden');
});