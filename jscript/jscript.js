function col(){
  $("#pic1").addClass("bianco")
  $("#immagine1").addClass("scomp")
  $("#title2").removeClass("invisible")}

function bn(){
  $("#pic2").addClass("bianco")
  $("#immagine2").addClass("scomp")
  $("#title1").removeClass("invisible")}

function colneg(){
  $("#pic1").removeClass("bianco")
  $("#immagine1").removeClass("scomp")
  $("#title2").addClass("invisible")}

function bnneg(){
  $("#pic2").removeClass("bianco")
  $("#immagine2").removeClass("scomp")
  $("#title1").addClass("invisible")}

$("#pic1").hover(bn,bnneg)

$("#pic2").hover(col,colneg)

function contacts(){
  $(".contacts").removeClass("invisible")
}

$(".contatti").click(contacts)
