//<button class="btn-sm js-rUI" data-media-sm="sm" data-media-med="med" data-media-med="lg">Responsive Button</button>

jQuery.fn.responsiveUI = function(){
  var vWidth = $(window).width();
  alert(vWidth);
  if (vWidth > 320) {
    alert('Fick');
    $(this).removeClass('btm-sml');
    $(this).addClass('btn-med');
  }
};