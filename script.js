var explButt = document.querySelector("#explore");
var icon = document.querySelector("#icon")

explButt.addEventListener("mouseover", function(){
  explButt.style.backgroundColor = "#FF5A5F"
  explButt.innerHTML = "Nick's Neuroscience and VR Blog"
  icon.classList.remove("fade-out");
  icon.classList.add("fade-in-slow");
})

explButt.addEventListener("mouseout", function(){
  explButt.style.backgroundColor = "white"
  explButt.innerHTML = "Click to Explore! Fuel Your Imagination...";
  if (icon.classList.contains('is-paused')){
  el.classList.remove('is-paused');
} 
  icon.classList.remove("fade-in-slow")
  icon.classList.add("fade-out")


})

explButt.addEventListener("click", function(){
  explButt.style.backgroundColor = "#FF5A5F";
  explButt.innerHTML = "Nick's Neuroscience and VR Blog";
  icon.classList.remove("fade-in-slow");
  icon.classList.remove("fade-out");
  icon.classList.add("fade-in");    
})