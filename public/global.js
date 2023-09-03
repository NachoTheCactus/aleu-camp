//#region Smooth scroll on link click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//#endregion

//USE data-target="#<target-id>" data-display-type="<target-wanted-display-type>" class="toggle-element-button" to use the script

const buttons = document.getElementsByClassName("toggle-element-button");

for (let i = 0; i < buttons.length; i++) {
  addCollapse(buttons[i]);
}

function addCollapse(button){
    button.addEventListener('click', function(event){
      var buttonPressed = event.currentTarget;
      var elementDisplayType = buttonPressed.getAttribute("data-display-type");
      var elementToToggleID = buttonPressed.getAttribute("data-target");
      var elementToToggle = document.querySelector(elementToToggleID);
      var navDesktop = document.getElementById("navbar-desktop");

      if (elementToToggle.style.display == "none" || elementToToggle.classList.contains("hidden")) {
        navDesktop.classList.add("border-b");
        elementToToggle.classList.add(elementDisplayType);
        elementToToggle.classList.remove("hidden");
      } else {
        navDesktop.classList.remove("border-b");
        elementToToggle.classList.add("hidden");
      }
    });
}

const inViewport = (elem) => {
    let animElements = document.getElementsByClassName(elem);
    let windowHeight = window.innerHeight;
    const elems = () => {
        for (let i = 0; i < animElements.length; i++) {//  loop through the sections
          let viewportOffset = animElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
          let top = viewportOffset.top;  //  get the offset top
          if(top < windowHeight){  //  if the top offset is less than the window height
              if(animElements[i].classList.contains('animd')){
                animElements[i].classList.add('animated-delayed')
              }else{
                animElements[i].classList.add('animated');//  add the class
              }
          }
        }
    }
    elems();
    window.addEventListener('scroll', elems);
}

inViewport('anim');  //  run the function on all section elements
