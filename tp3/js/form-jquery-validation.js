$(document).ready(function () {
    console.log("DOM ready!");
    $("button").click(function (event) {
        event.preventDefault()
        if ($("#nom").val() == "" || $("#prenom").val() == "" || $("#mail").val() == "" || $("#adresse").val() == "") {
            $('#myModal').modal("show")
        }
        else {
           
            $(".modal-body").html('<img src="image.png"/>');
            $('#myModal').modal("show");
            $(".modal-body").html('vous etes '
            +$("#nom ").val()+' '
            +$("#prenom ").val()
            +' et Vous Etes née le '
            +$("#date").val()
            +' et Vous Habitez au'+$("#Adresse").val()+'<br/>'          
            +'<img src="image.png" width="330" height="300"/>'+'<br/>'
            +'<a href=https://www.google.fr/maps/@ target="_blank">localisez moi</a>'
          
            )}
       
    });
    $( function() {
        
        $("#date").datepicker({
            maxDate:'0',
            dateFormat:'dd/mm/yy',

        })
           
        
} );
})