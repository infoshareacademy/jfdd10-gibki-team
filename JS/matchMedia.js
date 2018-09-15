var script = document.createElement('script');
script.type='text/javascript';

if(window.matchMedia("(max-width:576px)").matches) {
  script.src = 'JS/team-slider.js';      
}

document.getElementsByTagName('head')[0].appendChild(script);