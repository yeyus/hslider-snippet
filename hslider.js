/*! 
 * horizontalSlider.js 0.1 <jtrujillo@goindex.com>
 * 
 * Horizontal slidable div
 */

(function( $ ){

  var methods = {
    init: function( options ) { 
      return this.each(function(){
         
         var $this = $(this);
         
         $this.find(".previous,.next").css('line-height',$this.height()+'px');
         $this.find(".previous").click(function() {
         	$this.hslider('previous')
         });
         $this.find(".next").click(function() {
         	$this.hslider('next')
         });

       });
    },
    previous : function() {
       $(this).each(function () {
	   	var element = $(this).find(".slider-container");
	   	var stride = parseInt($(this).find(".item").css("width"));
	   	var offset = element.scrollLeft();
	   	element.animate({ scrollLeft: offset-stride}, 500 );
	   });
    },
    next : function() { 
	   $(this).each(function () {
	   	var element = $(this).find(".slider-container");
	   	var stride = parseInt($(this).find(".item").css("width"));
	   	var offset = element.scrollLeft();
	   	element.animate({ scrollLeft: offset+stride}, 500 );
	   });
    }
  };

  $.fn.hslider = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.hslider' );
    }    
  
  };

})( jQuery );