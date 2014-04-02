//<span class="js-hoverHook" data-hook="1">Hook</span>
//<span class="js-hoverTarget" data-target="1">Target</span>

jQuery.fn.hoverHook = function(){
  var $targets = $('.js-hoverTarget');
  
  $(this).hover(function() {
    $targets.each(function() {
      var hook = $('.js-hoverHook').data('hook');
      var target = $(this).data('target');

      if (target === hook) {
        $(this).toggleClass('invisible');
      }
    });
  })
};