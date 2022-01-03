function Menu(config){
    this.container = document.querySelector(config.container);
    this.btn = document.querySelector(config.btnMenu);

    var _this = this;

    _this.btn.addEventListener('click', function(){
        if(!_this.btn.classList.contains('btn-menu-aberto')){
            abrirMenu();
        }else{
            fecharMenu();
        }
    });

    function abrirMenu(){
        _this.container.style.display = 'block';
        _this.btn.classList.add('btn-menu-aberto');
        _this.btn.querySelector('i').classList.remove('fa-bars');
        _this.btn.querySelector('i').classList.add('fa-times');
        document.querySelector('body').style.overflow = 'hidden';
    }

    function fecharMenu(){
        _this.container.style.display = 'none';
        _this.btn.classList.remove('btn-menu-aberto');
        _this.btn.querySelector('i').classList.remove('fa-times');
        _this.btn.querySelector('i').classList.add('fa-bars');
        document.querySelector('body').style.overflow = 'auto'
    }
}