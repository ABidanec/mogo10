$(document).ready(function(){
    $(".b-services2__list-desc").niceScroll({cursorcolor:"#95e1d3"});
});


// module view block
/**
модуль открытия/закрытия болков в секции 
b-services2
*/
var moduleViewBlock = (function(){
    var 
        elemText = $(".b-services2__item-text"),
        elemTextList = elemText.parent("ul"),
        elemImg = $(".b-services2__item-img"),
        elemImgList = elemImg.parent("ul");
})();