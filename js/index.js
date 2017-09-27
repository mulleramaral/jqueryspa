$(function() {
    $(window).on('hashchange', hashchanged);
    hashchanged();
});

function hashchanged() {
    var hash = location.hash.replace('#', '') || 'pages/home';
    $("#conteudo").load(hash + '.html');
}