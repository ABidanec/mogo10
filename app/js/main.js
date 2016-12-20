$(document).load(function(){
    $(".b-services2__list-desc").niceScroll({cursorcolor:"#95e1d3"});
    //moduleMasonry.action();
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





/**
moduleMasonry - модуль адаптивных плиток
*/
var moduleMasonry = (function(){
    var fields = {
        container : $(".b-works__list"),
        element : ".b-works__item"
    }
    

    return {
        action : function(){
            fields.container.masonry({
                columnWidth: "25%",
                itemSelector: fields.element
            });
        }
    }
})();