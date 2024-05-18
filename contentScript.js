// contentScript.js
console.log("Hello from contentScript.js");
// Accessing the window object of the webpage
function loadExternalScript(src) {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
  
}

// Example usage:
loadExternalScript('https://www.youtube.com/popup.js');





  