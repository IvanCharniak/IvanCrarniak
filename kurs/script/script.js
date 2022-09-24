const catalogWindow = document.getElementsByClassName('catalogCard'),
        brandBt = document.getElementById('collapseBrands');

    brandBt.addEventListener('click', function (){
        catalogWindow.css('display', 'none')
    })

