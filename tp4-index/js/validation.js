// JavaScript source code
function validation() {
    if ($("#name").val() == "" || $("#firstname").val() == "" || $("#birth").val() == "" || $("#adresse").val() == "") {
        alert("veuillez remplire les champs demander")
    }


    else {

        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
        + $("#adresse").val()+"&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
        
        $("#map").html("<img src='"+img_url+"'>");
    }

}