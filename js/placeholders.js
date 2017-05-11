(function(){
  var inputs = document.querySelectorAll(".field-label input[type=text], .field-label input[type=email]");
  for (var i=0; i < inputs.length; i++) {
    var input = inputs[i];
    input.addEventListener("keyup", keyup);
    input.setAttribute("value", "");
  }
  
  function keyup(e) {
    e.target.setAttribute("value", e.target.value);
  }
})();
