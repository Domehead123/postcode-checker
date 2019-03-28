$(document).ready(function() {

    var allPostcodes = ["BH65AD", "BH65AE", "BH65AF"];



    $(".check").click(function() {

        var enteredValue = $(".postcode").val();

        enteredValue = enteredValue.replace(/\s/g, '');

        enteredValue = enteredValue.toUpperCase();



        for (i = 0; i < allPostcodes.length; i++) {

            if (allPostcodes[i] == enteredValue) {
                postcodeTrue = true;
                break;
            }

            else {
                postcodeTrue = false;

            }


        }


if (postcodeTrue == true) {
   $(".confirmation").text("Yes, we deliver to that postcode.");
}

else 

$(".confirmation").text("No, we don't deliver to that postcode");

    });

});




