
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENU RESPONSIVO (MOBILE) ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link (útil para mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // --- 2. SIMULADOR DE IMPACTO AMBIENTAL ---
    const btnCalcular = document.getElementById('btnCalcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    const litrosAguaSpan = document.getElementById('litrosAgua');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples
        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira uma quantidade válida de hectares (maior que 0).');
            resultadoBox.classList.add('hidden');
            return;
        }

        // Base de cálculo hipotética: Economia média de 1.200.000 litros de água por hectare/ano 
        // utilizando sistemas de gotejamento inteligente em comparação com irrigação tradicional por aspersão.
        const economiaPorHectare = 1200000;
        const totalEconomizado = hectares * economiaPorHectare;

        // Formata o número para o padrão brasileiro (ex: 1.200.000)
        litrosAguaSpan.textContent = totalEconomizado.toLocaleString('pt-BR');

        // Exibe a caixa de resultado com animação simples (removendo a classe hidden)
        resultadoBox.classList.remove('hidden');
    });
});