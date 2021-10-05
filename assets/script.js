let btns = document.querySelectorAll('.nav');
let product_list = document.querySelectorAll('.item');
let btns_pagenumber = document.querySelectorAll('.number');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btns.forEach(btn => btn.classList.remove('active-filter'));
        this.classList.add('active-filter');

        let get_type = document.getElementsByClassName('active-filter')[0].innerText;
        if(get_type == 'All'){
            product_list.forEach(prd => prd.style.display = 'flex')
        }else{
            product_list.forEach(prd => {
                if(prd.dataset.type == get_type){
                    prd.style.display = 'flex';
                }else{
                    prd.style.display = 'none';
                }
            });
        }
    });    
});

btns_pagenumber.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btns_pagenumber.forEach(btn => btn.classList.remove('page'));
        this.classList.add('page');
    });    
});

