$( document ).ready(function() {
    var menu = $('#user-dropdown-menu');
    var user = $('#user-dropdown');
    menu.hide();



    user.on('click', function(){
    menu.toggle();
    });

    $( window ).load(function() {
        menu.css('width',user.outerWidth());
        $('#content').css('min-height', window.innerHeight-186+'px');
    });
});
