const positionSelect = document.getElementById("select");
const Button1 = document.getElementById("ajou");
const Button4 = document.getElementById("valider");
//valider
positionSelect.addEventListener("change", function () {
  let y = positionSelect.value;
  if (y === "GK") {
    document.getElementById("GK").classList.remove("hidden");
    document.getElementById("other").classList.add("hidden");
  } else {
    document.getElementById("other").classList.remove("hidden");
    document.getElementById("GK").classList.add("hidden");
  }
});

//ajouter
Button1.addEventListener("click", function () {
  const form = document.getElementById("formulle");
  const joueur = document.createElement("div");
  let teta = document.getElementById("buttons");
  teta.classList.add("opacity-40");
  let phi = document.getElementById("imagee");
  phi.classList.add("opacity-40");
  let lamda = document.getElementById("formulle");
  lamda.classList.remove("hidden");
  lamda.classList.add("block", "opacity-100");
  Button4.addEventListener("click", function () {
  lamda.classList.add("hidden");
  teta.classList.remove("opacity-40");
  phi.classList.remove("opacity-40");
  });
});
//formation
document.addEventListener("DOMContentLoaded", function () {
  const formation = document.getElementById("formation");
  formation.addEventListener("change", function () {
    const selectedFormation = formation.value;
    console.log(selectedFormation);
    let psi = document.getElementById("4-4-2");
    let rho = document.getElementById("4-3-3");
    if (selectedFormation === "4-4-2") {
      psi.classList.remove("hidden");
      rho.classList.add("hidden");
    } else if (selectedFormation === "4-3-3") {
      rho.classList.remove("hidden");
      psi.classList.add("hidden");
    }
  });
});


