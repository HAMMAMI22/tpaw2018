$(document).ready(function () {
    console.log("DOM ready!");
    $("button").click(function (event) {
        event.preventDefault()
        if ($("#nom").val() == "" || $("#prenom").val() == "" || $("#mail").val() == "" || $("#adresse").val() == "") {
            $('#myModal').modal("show")
        }
        else {
           
            $(".modal-body").html('<img src="image.PNG"/>');
            $('#myModal').modal("show");
            $(".modal-body").html('vous etes '
            +$("#nom ").val()+' '
            +$("#prenom ").val()
            +' et Vous Etes nés le '
            +$("#date").val()
            +' et Vous Habitez au'+$("#adresse").val()+'<br/>'          
            +"<img src='https://maps.googleapis.com/maps/api/staticmap?center=" + $("#adresse").val() + "&markers="+$("#adresse").val()+"&size=300x300'/><br>"   );
        
            $(".modal").modal("show");
          
            }
       
    });
    $( function() {
        
        $("#date").datepicker({
            maxDate:'0',
            dateFormat:'dd/m/yy',

        })
           
        
} );
})