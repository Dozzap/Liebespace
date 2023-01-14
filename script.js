

document.addEventListener("click", function(){
  document.body.classList.remove("no-scroll");
  document.getElementById("landingpage").classList.remove("landingpage");
  document.getElementById("landingpage").classList.remove("text");


});

function scrollToAboutMe() {
  var thingsIDo = document.getElementById("short_cuts");
  thingsIDo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToThingsIDo() {
  var thingsIDo = document.getElementById("thingsIDo");
  thingsIDo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToProjects() {
  var thingsIDo = document.getElementById("thingsToDo");
  thingsIDo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


function scrollToContactMe() {
  var thingsIDo = document.getElementById("contact");
  thingsIDo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}