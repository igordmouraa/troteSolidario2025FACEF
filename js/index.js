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
}