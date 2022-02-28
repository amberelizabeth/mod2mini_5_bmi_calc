// Scripts to complete assignment
$(function(){

// -----------------------------------------------
// disable the results window at startup and reset
// -----------------------------------------------
function clearFormAndResults (){
    $('#result-container').hide();
    $('.bmi-input').val('');
    $('.error-message').hide();
}

// initially hide results and error messages
clearFormAndResults();
$('.error_message').hide();

// reset form and clear results when reset button pushed
$('#resetBtn').click(function(){
    clearFormAndResults();
});


// -----------------------------------------------
// on "calculate" button click, calculate BMI
// and display result 
// -----------------------------------------------
function calculateBMI(weight, height){
    return weight / (height * height);
}

function getBodyType(bmi){
    let bodytype = "";

    if( bmi <= 18.5 ){
        bodytype = "underweight";
    }else if( bmi <= 24.9 ){
        bodytype = "normal weight";
    }else if( bmi <= 29.9 ){
        bodytype = "overweight";
    }else{
        bodytype = "obese";
    }
    return bodytype;
}


// Error checking on form fields
function isHeightValid(){
    let height = parseInt($('#height').val());
    let isValid = false;

    if( isNaN(height) || height <= 0 || height > 4){
        $('#error_height').text("Enter a valid height.");
        $('#error_height').show();
    }else{
        $('#error_height').hide();
        isValid = true;
    }
    return isValid;
}
function isWeightValid(){
    let weight = parseInt($('#weight').val());
    let isValid = false;

    if( isNaN(weight) || weight <= 0){
        $('#error_weight').text("Enter a valid weight.");
        $('#error_weight').show();
    }else{
        $('#error_weight').hide();
        isValid = true;
    }
    return isValid;
}

$('#weight').on('blur', function(){
    isWeightValid();
});

$('#height').on('blur', function(){
    isHeightValid();
});


// Calculate BMI
$('#calculateBtn').click(function(){
    let weight = parseInt($('#weight').val());
    let height = parseInt($('#height').val());

    if( isWeightValid() && isHeightValid() ){
        let bmi = calculateBMI( weight, height );

        $('#bmi').text(bmi);
        $('#body-type').text(getBodyType(bmi));

        $('#result-container').show();
    }
});

});