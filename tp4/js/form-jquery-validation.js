$(document).ready(function () {
    console.log("DOM ready!");
    $("button").click(function (event) {
        event.preventDefault()
        if ($("#nom").val() == "" || $("#prenom").val() == "" || $("#mail").val() == "" || $("#adresse").val() == "") {
            $('#myModal').modal("show")
        }
        else {
           
            $("#adresse").val()+'<br/>'          
            +"<img src='https://maps.googleapis.com/maps/api/staticmap?center=" + $("#adresse").val() + "&markers="+$("#adresse").val()+"&size=300x300'/><br>"   );
        
           
          
            }
       
    });
    $( function() {
        
        $("#date").datepicker({
            maxDate:'0',
            dateFormat:'dd/m/yy',

        })
           
        
} );
})



