
let oldValue = 0
let newValue = 0

let scalingFont = 25
let finalFont = scalingFont + 'vw'

var elements = document.querySelectorAll('.scale');

window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    console.log("Down/Smaller");
    scalingFont = scalingFont - 2;
  } else if (oldValue > newValue) {
    console.log("Up/Bigger");
    scalingFont = scalingFont + 2;
  }
  oldValue = newValue;

  for(var i=0; i<elements.length; i++){
      elements[i].style.fontSize = finalFont;
      elements[i].style.fontSize = finalFont;
      console.log("Font size: " + scalingFont + ". CSS value: " + finalFont);
  }

  finalFont = scalingFont + 'vw'

});
