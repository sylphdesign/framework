//<span class="js-clickFunction" data-target=".js-target" data-class="active">Click</span>
//<span class="js-target">Target</span>

jQuery.fn.clickFunction = function(){
  var $target = $(this).data('target');
  var js_class = $(this).data('class');
  
  $(this).click(function() {
    $($target).toggleClass(js_class);
  })
};


jQuery.fn.scrollFunction = function(){
  var $target = $(this).data('target');
  var js_class = $(this).data('class');
  
  if ($(this).offset() === ) {
    $($target).addClass(js_class);
  })
};