function Modal(config){
    this.containerModal = document.querySelector(config.containerModal);
    this.itemsModal = document.querySelectorAll(config.itemsModal);
    this.btnAnterior = document.querySelector(config.btnAnterior);
    this.btnProximo = document.querySelector(config.btnProximo);

    var _this = this;
    var imgAtual;

    _this.itemsModal.forEach(item => {
        item.addEventListener('click', function(e){
            ativarModal(e.target.src);
            console.log(e.target);
        });
    });

    _this.containerModal.addEventListener('click', function(e){
        if(e.target.tagName == 'DIV')
            fecharModal();
    });

    _this.btnAnterior.addEventListener('click', function(){
        if(imgAtual <= 0){
            mudarImgModal(_this.itemsModal.length - 1);
        }else{
            imgAtual -= 1;
            mudarImgModal(imgAtual);
        }
    });

    _this.btnProximo.addEventListener('click', function(){
        if(imgAtual >= _this.itemsModal.length - 1){
            mudarImgModal(0);
        }else{
            imgAtual += 1;
            mudarImgModal(imgAtual);
        }
    });

    function ativarModal(urlImg){
        _this.containerModal.querySelector('.container-img-modal img').src = urlImg;
        _this.containerModal.classList.remove('modal-fechado');
        document.querySelector('body').style.overflow = 'hidden';
        definirImgAtual(urlImg);
    }

    function fecharModal(){
        _this.containerModal.classList.add('modal-fechado');
        document.querySelector('body').style.overflow = 'auto';
    }

    function definirImgAtual(urlImg){
        for(var i = 0; i < _this.itemsModal.length; i++){
            if(_this.itemsModal[i].src == urlImg)
                imgAtual = i;
        }
    }

    function mudarImgModal(imgAlvo){
        imgAtual = imgAlvo;
        _this.containerModal.querySelector('.container-img-modal img').src = _this.itemsModal[imgAlvo].src;
    }
}