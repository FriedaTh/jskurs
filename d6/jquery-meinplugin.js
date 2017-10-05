$.fn.red = function() {
  return this.css({color:'red'});
  //return this; // transparente Methoden
  //return this.parent(); // destruktiv, weil jQuery aber was anderes als this
  //kein return => terminierend
  // return kein jQuery => terminierend
}

;(function($) { // hier kapsle ich Funktion, übergebe von außen jquery, damit ich jquery innerhalb verwenden kann
  //Bsp für iife
$.fn.colorize = function( options ) {
  var settings = $.extend({
    r:0,
    g:0,
    b:0
  },options);
  return this.each( function() {
    if ( $(this).hasClass( 'nocolorize') == false ) {
      $(this).css({color:'rgb('+settings.r+','+settings.g+' ,'+settings.b+' )'})
    }
  } );
  //return this;
}
}(jQuery));

;(function($) {
  $.fn.formatNumbers = function( options ) {
      var settings = $.extend({
        color:'red'
      },options);

      return this.each( function(){
        var i, inhalt = $(this).html(), neuerInhalt = '';
        for (i in inhalt) {
          neuerInhalt += isFinite( inhalt[i]) ? '<span style="color:red;">'+inhalt[i]+'</span>' : inhalt[i];
        }
        $(this).html(neuerInhalt);
      });
    };


}(jQuery));



//isFinite()
//isNaN()
