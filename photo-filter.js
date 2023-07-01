$(document).ready(function(){
    $('.list-item').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.image').show(1000);
        }else{
            $('.image').not('.'+value).hide('1000');
            $('.image').filter('.'+value).show('1000');
        }
    });
    $('.list-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});