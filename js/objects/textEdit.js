//<span class="js-textEdit" data-text="Show less">Show more</span>

jQuery.fn.textEdit = function(){
  $(this).click(function() {
    var oldText = $(this).text();
    var newText = $(this).data('text');
    $(this).text(newText).data('text', oldText);
  });
};