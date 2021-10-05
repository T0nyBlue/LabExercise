let btns = document.querySelectorAll('.nav');
let product_list = document.querySelectorAll('.item')

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



