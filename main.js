document.addEventListener('DOMContentLoaded', function () {
    // Seleção de elementos do Menu
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Seleção dos botões de ação
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    // Configurações de limites para o tamanho da fonte (escala em rem)
    let tamanhoAtualFonte = 1.0;
    const TAMANHO_MAXIMO = 1.5; // No máximo 150% do tamanho original
    const TAMANHO_MINIMO = 0.8; // No mínimo 80% do tamanho original
    const PASSO_ALTERACAO = 0.1;

    // 1. Alternar a exibição do menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        // Atualiza o estado do ARIA para leitores de tela
        const estaExpandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !estaExpandido);
    });

    // 2. Função para aplicar o novo tamanho de fonte com segurança
    function alterarTamanhoFonte(fator) {
        const novoTamanho = tamanhoAtualFonte + fator;
        
        // Verifica se o novo tamanho está dentro dos limites permitidos
        if (novoTamanho >= TAMANHO_MINIMO && novoTamanho <= TAMANHO_MAXIMO) {
            tamanhoAtualFonte = novoTamanho;
            // Alterar o fontSize do documento inteiro (documentElement = tag <html>)
            // Isso garante que todos os 'rem' do seu CSS se adaptem proporcionalmente
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    }

    // Ouvintes de evento para os botões de tamanho de fonte
    aumentaFonteBotao.addEventListener('click', function () {
        alterarTamanhoFonte(PASSO_ALTERACAO);
    });

    diminuiFonteBotao.addEventListener('click', function () {
        alterarTamanhoFonte(-PASSO_ALTERACAO);
    });

    // 3. Alternar o modo de Alto Contraste
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});