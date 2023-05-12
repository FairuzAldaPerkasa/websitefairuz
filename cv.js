function alamat(){
  alert("Jl. Ringroad Selatan No.156, Giwangan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55188")
}

function nim(){
  document.getElementById("nim").innerHTML = "2200018138";
}

var printBtn = document.getElementById("print-btn");
    printBtn.addEventListener("click", function() {
        window.print();
});


var acc = document.getElementsByClassName("right-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}