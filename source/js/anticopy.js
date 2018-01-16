$(window).keydown(function (e){
    if (e.ctrlKey) return false;
    if (e.altKey) return false;
    if (e.shiftKey) return false;
    if (e.metaKey) return false;
});

$('body').bind('copy paste cut drag drop', function (e) {
    e.preventDefault();
});