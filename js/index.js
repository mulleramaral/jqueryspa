$(function(){
    $('#interno a').on('click',function(evt){
        evt.preventDefault();
        var url = $(this).attr('href');
        $.get(url).done(function(data){
            $('#conteudo').html(data);
        }).fail(function(){
            $('#conteudo').html('Página não encontrada');
        });
    });

    $('#conteudo').load('pages/home.html');
});