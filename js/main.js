(function(){
    var menu = new Menu({
        container: '.container-menu .menu-header',
        btnMenu: '.container-menu .btn-menu'
    });

    var modal = new Modal({
        containerModal: '.modal-amostras',
        itemsModal: '.amostras .row .amostra img',
        btnAnterior: '.modal-amostras .btn-anterior',
        btnProximo: '.modal-amostras .btn-proximo'
    });
}());