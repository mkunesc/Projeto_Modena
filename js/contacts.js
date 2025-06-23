document.addEventListener('DOMContentLoaded', function () {
    const linkContato = document.querySelector('a[href="#contato"]');
    const modal = document.getElementById('modal-contato');
    const botaoFechar = document.querySelector('.modal-fechar');

    if (linkContato && modal && botaoFechar) {
        linkContato.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'flex';
            document.body.classList.add('modal-aberto');
        });

        botaoFechar.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.classList.remove('modal-aberto');
        });

        window.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-aberto');
            }
        });
    }
});
