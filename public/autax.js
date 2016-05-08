$("document").ready(function(){
    $("#period").val(new Date().getMonth()+1);
    //$(".alert").alert('close')	
})

   $('.close').click(function () {
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

$("#getPayslip").click(function(){
    $.post( "/payee", { firstName: $("#firstName").val(), lastName: $("#lastName").val(), period: $("#period").val(), amount: $("#amount").val(), pension: $("#pension").val(), medicare: $("#medicare").val() })
    .done(function( data ) {
        if(data.hasOwnProperty("error")){
            $("#error_text").text(data.error);
            $("#error").addClass('in');
        } else {
            $("#payslipDocTitle").html(data.firstName+" "+data.lastName+"<br>"+data.period)
            $("#amountPrint").text(data.amount+"$")
            $("#taxBandPrint").text(data.taxBand)
            $("#grossAmountPrint").text(data.grossAmount+"$")
            $("#incomeTaxPrint").text(data.incomeTax+"$")
            $("#medicarePrint").text("Yes")
            if(data.medicare){
                $("#medicarePrint").text("No")
                $("#medicareInfo").css("display", "inline")
                $("#medicareAmountPrint").text(data.medicareAmount+"$")
                $("#medicareCreditPrint").text(data.medicareCredit+"$")
            }
            $("#pensionPrint").text(data.pension)
            $("#pensionAmountPrint").text(data.pensionAmount+"$")
            $("#netAmountPrint").text(data.netAmount+"$")
            $('#payslip').modal("toggle")
        }
    });
})