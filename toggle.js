$(document).ready(()=>{
    const menuIcon = $('#menu-icon');
    const menu = $('#menu');
    menuIcon.click(()=>{
       if(menu.hasClass('hidden'))
            menu.removeClass('hidden');
       else
            menu.addClass('hidden');
    });
});