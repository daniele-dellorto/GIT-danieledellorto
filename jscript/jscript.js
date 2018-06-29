function col(){
  $("#pic1").addClass("bianco")
  $("#immagine1").addClass("scomp")}

function bn(){
  $("#pic2").addClass("bianco")
  $("#immagine2").addClass("scomp")}

function colneg(){
  $("#pic1").removeClass("bianco")
  $("#immagine1").removeClass("scomp")}

function bnneg(){
  $("#pic2").removeClass("bianco")
  $("#immagine2").removeClass("scomp")}

$("#pic1").hover(bn,bnneg)

$("#pic2").hover(col,colneg)
