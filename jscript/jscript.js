function col(){
  $("#pic1").addClass("bianco")
  $("#immagine1").addClass("scomp")
  $(".title2").removeClass("invisible")
  $("#qu2").addClass("appearing")}

function bn(){
  $("#pic2").addClass("bianco")
  $("#immagine2").addClass("scomp")
  $(".title1").removeClass("invisible")
  $("#qu1").addClass("appearing")}

function colneg(){
  $("#pic1").removeClass("bianco")
  $("#immagine1").removeClass("scomp")
  $(".title2").addClass("invisible")
  $("#qu2").removeClass("appearing")}

function bnneg(){
  $("#pic2").removeClass("bianco")
  $("#immagine2").removeClass("scomp")
  $(".title1").addClass("invisible")
  $("#qu1").removeClass("appearing")}

$("#immagine1").hover(bn,bnneg)

$("#immagine2").hover(col,colneg)

function contacts(){
  $(".insta").addClass("insta1")
  $(".insta").removeClass("insta")
}

function contactsneg(){
  $(".insta1").addClass("insta")
  $(".insta1").removeClass("insta1")
}

$(".hov").hover(contacts,contactsneg)

function animateintro(){
  $("#intro").addClass("animate")
  $(".middle-content-section").addClass("invisible")
}

$("#transizione1").hover(animateintro)

function delay (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}

function about(){
  $("#about").addClass("down")
}

$("#col").click(about)
