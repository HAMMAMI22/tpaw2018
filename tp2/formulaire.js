function verif(){
    var nom = document.getElementById('nom').value;
  if(nom.length <5){
  
  alert('il faut au moins 5 caractéres');
 
  
    alert('le nom doit contenir au moins 5 caratères');
    document.getElementById("verif").innerHTML =  "il faut au moins 5 caractéres";}
    else
    {
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }
    }
