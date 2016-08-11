$(document).ready( function() {
  var space = new Space();
  updateList();
$('#name').click(function() {
  space.find(string);
  updateList();
});
$('#price').click(function() {
  space.price(num);
  updateList();
});
});
