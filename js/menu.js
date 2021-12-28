function Menu(config){
    this.container = document.querySelector(config.container);
    this.btn = document.querySelector(config.btnMenu);

    var _this = this;

    _this.btn.addEventListener('click', function(){
        if(_this.container.classList.contains('menu-fechado')){
            abrirMenu();
        }else{
            fecharMenu();
        }
    });

    function abrirMenu(){
        _this.container.classList.remove('menu-fechado');
        _this.btn.classList.add('btn-menu-aberto');
        _this.btn.querySelector('i').classList.remove('fa-bars');
        _this.btn.querySelector('i').classList.add('fa-times');
    }

    function fecharMenu(){
        _this.container.classList.add('menu-fechado');
        _this.btn.classList.remove('btn-menu-aberto');
        _this.btn.querySelector('i').classList.remove('fa-times');
        _this.btn.querySelector('i').classList.add('fa-bars');
    }
}