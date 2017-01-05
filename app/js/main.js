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
        containerWorks : $(".b-works__list"),
        elementWorks : ".b-works__item",
        widthWorks : "25%",
        containerPost : $(".b-post__list"),
        elementPost : ".b-post__item",
        widthPost : "33%"
    }
    

    var _masonryMethod = function(container, element, widDt){
        container.masonry({
                columnWidth: widDt,
                itemSelector: element
            });
        console.log(""+container);
    }

    return {
        action : function(){
            _masonryMethod(containerWorks, elementWorks, widthWorks);
            _masonryMethod( containerPost, elementPost, widthPost);
        }
    }
})();