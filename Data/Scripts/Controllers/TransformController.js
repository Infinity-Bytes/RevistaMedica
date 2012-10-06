// JavaScript Document

    /**
    * Inspired by Jesse Guardiani - May 1st, 2012
    */
    
var zIndexBackup = 10;

var globalScale = 1;

function ZoomView(container, element) {
        container = $(container).hammer({
            prevent_default: true,
            scale_treshold: 0,
            drag_min_distance: 0
        });

        element = $(element);
        
        var MIN_ZOOM = 1;
        var MAX_ZOOM = 4;

        var scaleFactor = 1;
        var previousScaleFactor = 1;

        var containerPadding = parseInt(container.css('padding-left').split('px')[0]);
        var cssOrigin = "";

        container.bind("transformstart", function(event){
            cssOrigin = container.height()/2+"px "+container.width()/2+"px";
        });

        container.bind("transform", function(event) {
            scaleFactor = previousScaleFactor * event.scale;
            scaleFactor = Math.max(MIN_ZOOM, Math.min(scaleFactor, MAX_ZOOM));
            transform(event);
        });

        container.bind("transformend", function(event) {
            previousScaleFactor = scaleFactor;
          
            actualHeight = (scaleFactor*element.height()) - element.height();
            padding = ((containerPadding * scaleFactor) + actualHeight)/2;

            padding= padding <= 10? 10: padding;

            container.css('top', element.offset().top - container.parent().offset().top);
            container.css('left', element.offset().left - container.parent().offset().left);
            container.css({
                'padding-left': padding+"px",
                'padding-right': padding+"px",
                'padding-top': padding+"px",
                'padding-bottom': padding+"px"
            });

        });

        function transform(e) {
            var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +") rotate("+ e.rotation +"deg)";
            element.css({
                webkitTransform: cssScale,
                webkitTransformOrigin: cssOrigin,

                transform: cssScale,
                transformOrigin: cssOrigin
            });
        };
};