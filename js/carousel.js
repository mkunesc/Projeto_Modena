window.onload = function () {
    const imagens = ["img/audi.jpg", "img/bmw.jpg", "img/civic.jpg"];
    let indexCentral = 1;
    let intervalo;
    let mouseSobreCarrossel = false;

    const updateCarrossel = () => {
        const esquerda = document.querySelector('.item.esquerda img');
        const central = document.querySelector('.item.central img');
        const direita = document.querySelector('.item.direita img');

        if (esquerda && central && direita) {
            [esquerda, central, direita].forEach(img => img.classList.add('fade-out'));

            setTimeout(() => {
                esquerda.src = imagens[(indexCentral - 1 + imagens.length) % imagens.length];
                central.src = imagens[indexCentral % imagens.length];
                direita.src = imagens[(indexCentral + 1) % imagens.length];

                [esquerda, central, direita].forEach(img => img.classList.remove('fade-out'));
            }, 400);
        }
    };

    const avancar = () => {
        indexCentral = (indexCentral + 1) % imagens.length;
        updateCarrossel();
        resetarIntervalo();
    };

    const voltar = () => {
        indexCentral = (indexCentral - 1 + imagens.length) % imagens.length;
        updateCarrossel();
        resetarIntervalo();
    };

    const iniciarIntervalo = () => {
        intervalo = setInterval(() => {
            if (!mouseSobreCarrossel) {
                avancar();
            }
        }, 4000);
    };

    const resetarIntervalo = () => {
        clearInterval(intervalo);
        iniciarIntervalo();
    };

    const carrossel = document.querySelector('.carrossel-container');

    if (carrossel) {
        carrossel.addEventListener('mouseenter', () => {
            mouseSobreCarrossel = true;
        });

        carrossel.addEventListener('mouseleave', () => {
            mouseSobreCarrossel = false;
        });
    }

    document.querySelector('.seta.direita')?.addEventListener('click', avancar);
    document.querySelector('.seta.esquerda')?.addEventListener('click', voltar);

    document.querySelector('.item.direita img')?.addEventListener('click', avancar);
    document.querySelector('.item.esquerda img')?.addEventListener('click', voltar);

    updateCarrossel();
    iniciarIntervalo();
};
