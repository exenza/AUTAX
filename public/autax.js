$("document").ready(function(){
    $("#period").val(new Date().getMonth()+1);
    //$(".alert").alert('close')	
})

   $('.close').click(function () {
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

$("#getPayslip").click(function(){
    console.log("Getting payslip")
    $.post( "/payee", { firstName: $("#firstName").val(), lastName: $("#lastName").val(), period: $("#period").val(), amount: $("#amount").val(), pension: $("#pension").val() })
    .done(function( data ) {
        if(data.hasOwnProperty("error")){
            console.log(data)
            $("#error_text").text(data.error);
            $("#error").addClass('in');
        }
    });
})