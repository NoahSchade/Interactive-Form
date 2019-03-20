$("#name").focus();

const $other_title = $('#other-title');

$other_title.hide();


$("#title").change(function(){
    showHideOther();
});


function showHideOther() {
        if($("[value ='other']").is(':selected')){
            $other_title.show();
        } else {
            $other_title.hide();
        }
}


$("label[for ='color']").hide();
$("select#color").hide();


const jsPunsArr = [];
const iArr = [];

$("#design").change(function(){
    $("label[for ='color']").show();
    $("select#color").show();
    
    for(let i = 1; i <= $("#design option").length; i++){

        if($(`#design option:nth-child(${i})`).text() === "Select Theme"){
            $(`#design option:nth-child(${i})`).remove();
        };

        if($(`#design option:nth-child(${i})`).filter(':selected').text() === "Theme - JS Puns") {
            const regex = /.*JS Puns.*/;
            for(let i = 1; i <= $("#color option").length; i++){
                     const $colorText = $(`#color option:nth-child(${i})`).text();
                     const $colorElement = $(`#color option:nth-child(${i})`);
                     const $colorValue = $(`#color option:nth-child(${i})`).val();
                     if($colorText.match(regex)){
                        jsPunsArr.push($colorValue);
                        $colorElement.show();
                     } else {
                        $colorElement.hide();
                     }
             }
             $("select#color").val(jsPunsArr)[0];
        }

        if($(`#design option:nth-child(${i})`).filter(':selected').text().match(/.*I.*/)) {
            const regex = /.*I.*/;
            for(let i = 1; i <= $("#color option").length; i++){
                     const $colorText = $(`#color option:nth-child(${i})`).text();
                     const $colorElement = $(`#color option:nth-child(${i})`);
                     const $colorValue = $(`#color option:nth-child(${i})`).val();
                     if($colorText.match(regex)){
                        iArr.push($colorValue);
                        $colorElement.show();
                     } else {
                        $colorElement.hide();
                     }
             }
             $("select#color").val(iArr)[0];
        }
    }

});

$('[type = "checkbox"]').click(function() {
    if($("[name = 'js-frameworks']").is(':checked')) {
        $('label:nth-child(5)').css("color", "gray");
        $('[name="express"]').attr("disabled", "true");
        $('[name="express"]').prop('checked', false);
    } else {
         $('label:nth-child(5)').removeAttr("style");
         $('[name="express"]').removeAttr("disabled");
    }

    if($("[name = 'express']").is(':checked')) {
        $('label:nth-child(3)').css("color", "gray");
        $('[name="js-frameworks"]').attr("disabled", "true");
        $('[name="js-frameworks"]').prop('checked', false);
    } else {
         $('label:nth-child(3)').removeAttr("style");
         $('[name="js-frameworks"]').removeAttr("disabled");
    }

    if($("[name = 'js-libs']").is(':checked')) {
        $('label:nth-child(6)').css("color", "gray");
        $('[name="node"]').attr("disabled", "true");
        $('[name="node"]').prop('checked', false);
    } else {
         $('label:nth-child(6)').removeAttr("style");
         $('[name="node"]').removeAttr("disabled");
    }

    if($("[name = 'node']").is(':checked')) {
        $('label:nth-child(4)').css("color", "gray");
        $('[name="js-libs"]').attr("disabled", "true");
        $('[name="js-libs"]').prop('checked', false);
    } else {
         $('label:nth-child(4)').removeAttr("style");
         $('[name="js-libs"]').removeAttr("disabled");
    }


    
});


let j = 0;
let hundred = 100;
let twoHundred = 0;
let total = 0;

$('input[type="checkbox"]').click(function() {
    if($(this).prop("checked") == true) {
        j++;
        if($('[name = "all"]').prop("checked") == true) {
            twoHundred = 100;
        }
    }
    else if($(this).prop("checked") == false) {
        j--;
        twoHundred = 0;
        if($('[name = "all"]').prop("checked") == true) {
            twoHundred = 100;
        }
    }
    console.log(cost = j * hundred + twoHundred);

    const totalText = `<h3>Total: $${cost}</h3>`;
    $(".activities").append(totalText);
    if($(".activities h3").length > 1) {
        $(".activities h3")[0].remove();
    }
});

const bitcoinRegex = /.*Bitcoin.*/;
const paypalRegex = /.*PayPal.*/;
for(let i = 1; i <= $("fieldset div").length; i++){
    if($(`fieldset div:nth-child(${i})`).text().match(bitcoinRegex)){
        $(`fieldset div:nth-child(${i})`).hide();
    }
    else if($(`fieldset div:nth-child(${i})`).text().match(paypalRegex)){
        $(`fieldset div:nth-child(${i})`).hide();
    }
}
$("option[value = 'select_method']").hide();
$("option[value = 'credit card'").attr("selected", "selected");

$("select#payment").change(function(){
    if($("option[value = 'paypal']").is(':selected')){
        $("#credit-card").hide();
        const bitcoinRegex = /.*Bitcoin.*/;
        const paypalRegex = /.*PayPal.*/;
        for(let i = 1; i <= $("fieldset div").length; i++){
            if($(`fieldset div:nth-child(${i})`).text().match(bitcoinRegex)){
                $(`fieldset div:nth-child(${i})`).hide();
            }
            else if($(`fieldset div:nth-child(${i})`).text().match(paypalRegex)){
                $(`fieldset div:nth-child(${i})`).show();
            }
        }       
    }
});

$("select#payment").change(function(){
    if($("option[value = 'bitcoin']").is(':selected')){
        $("#credit-card").hide();
        const bitcoinRegex = /.*Bitcoin.*/;
        const paypalRegex = /.*PayPal.*/;
        for(let i = 1; i <= $("fieldset div").length; i++){
            if($(`fieldset div:nth-child(${i})`).text().match(paypalRegex)){
                $(`fieldset div:nth-child(${i})`).hide();
            }
            else if($(`fieldset div:nth-child(${i})`).text().match(bitcoinRegex)){
                $(`fieldset div:nth-child(${i})`).show();
            }
        }    
    }
});

$("select#payment").change(function(){
    if($("option[value = 'credit card']").is(':selected')){
        $("#credit-card").show();
        const bitcoinRegex = /.*Bitcoin.*/;
        const paypalRegex = /.*PayPal.*/;
        for(let i = 1; i <= $("fieldset div").length; i++){
            if($(`fieldset div:nth-child(${i})`).text().match(paypalRegex)){
                $(`fieldset div:nth-child(${i})`).hide();
            }
            else if($(`fieldset div:nth-child(${i})`).text().match(bitcoinRegex)){
                $(`fieldset div:nth-child(${i})`).hide();
            }
        }
    }      
});

const emptyFieldRegex = /^\s*$/;
const notLetterOrSpace = /[^A-Za-z-\s]+/;
const emailValidator = /[A-z,\d, .]+@[A-z,\d, .]+\.[A-z,\d]+/;

$('form').on('submit',function(e){
    const emptyFieldRegex = /^\s*$/;
    if($("#name").val().match(emptyFieldRegex)){
        e.preventDefault();
        $("#name").css("border", "3px solid red");
        $("[for = 'name']").html("Name:<span class='nameFieldBlank'>Name field should not be blank</span>");
        $(".nameFieldBlank").css("color", "red");
        $(".nameFieldBlank").css("position", "absolute");
        $(".nameFieldBlank").css("transform", "translateX(50%)");
        $("fieldset:last").append("<div class='nameBlankBox'><br><br><div id='nameBlank'>To register, you must enter a name.</div></div>");
        $("#nameBlank").css("color", "red");
        if($(".nameBlankBox").length > 1) {
            $(".nameBlankBox")[1].remove();
        }
    }
    else {
        $(".nameBlankBox").remove();
    }
})

$('form').on('submit',function(e){
    if($("#name").val().match(notLetterOrSpace)){
        e.preventDefault();
        $("#name").css("border", "3px solid red");
        $("[for = 'name']").html("Name:<span class='nameFieldBlank'>Name field should only contain letters and spaces</span>");
        $(".nameFieldBlank").css("color", "red");
        $(".nameFieldBlank").css("position", "absolute");
        $(".nameFieldBlank").css("transform", "translateX(20%)");
        $("fieldset:last").append("<div class='nameBlankBox'><br><br><div class='nameBlank'>To register, the name field should only contain letters and spaces</div></div>");
        $(".nameBlank").css("color", "red");
        if($(".nameBlankBox").length === 2) {
            $(".nameBlankBox")[0].remove();
        }
    } 
    else if(!$("#name").val().match(notLetterOrSpace) && !$("#name").val().match(emptyFieldRegex)) {
        $("[for = 'name']").html("Name:");
        $("#name").css("border", "none");
        $(".nameBlankBox").remove();
    }
})



$("#name").on('keyup', function(){
    
    if($("#name").val().match(emptyFieldRegex)){
        $("#name").css("border", "3px solid red");
        $("[for = 'name']").html("Name:<span class='nameFieldBlank'>Name field should not be blank</span>");
        $(".nameFieldBlank").css("color", "red");
        $(".nameFieldBlank").css("position", "absolute");
        $(".nameFieldBlank").css("transform", "translateX(50%)");
        $("fieldset:last").append("<div class='nameBlankBox'><br><br><div class='nameBlank'>To register, you must enter a name.</div></div>");
        $(".nameBlank").css("color", "red");
        if($(".nameBlankBox").length === 2) {
            $(".nameBlankBox")[0].remove();
        }
    } 

})

$("#name").on('keyup', function(){
    
    if($("#name").val().match(notLetterOrSpace)){
        $("#name").css("border", "3px solid red");
        $("[for = 'name']").html("Name:<span class='nameFieldBlank'>Name field should only contain letters and spaces</span>");
        $(".nameFieldBlank").css("color", "red");
        $(".nameFieldBlank").css("position", "absolute");
        $(".nameFieldBlank").css("transform", "translateX(20%)");
        $("fieldset:last").append("<div class='nameBlankBox'><br><br><div class='nameBlank'>To register, the name field should only contain letters and spaces.</div></div>");
        $(".nameBlank").css("color", "red");
        if($(".nameBlankBox").length === 2) {
            $(".nameBlankBox")[0].remove();
        }
    } 
    else if(!$("#name").val().match(notLetterOrSpace) && !$("#name").val().match(emptyFieldRegex)) {
        $("[for = 'name']").html("Name:");
        $("#name").css("border", "none");
        $(".nameBlankBox").remove();
    }
});


$("#mail").on('keyup', function(){

    if(!$("#mail").val().match(emailValidator)){
        $("#mail").css("border", "3px solid red");
        $("[for = 'mail']").html("Email:<span class='emailFieldBlank'>Invalid Email");
        $(".emailFieldBlank").css("color", "red");
        $(".emailFieldBlank").css("position", "absolute");
        $(".emailFieldBlank").css("transform", "translateX(200%)");
        $("fieldset:last").append("<div class='emailBlankBox'><br><br><div class='emailBlank'>To register, you must enter a valid email address.</div></div>");
        $(".emailBlank").css("color", "red");
        if($(".emailBlankBox").length === 2) {
            $(".emailBlankBox")[0].remove();
        }
    }     
});

$("#mail").on('keyup', function(){

    if($("#mail").val().match(emptyFieldRegex)){
        $("#mail").css("border", "3px solid red");
        $("[for = 'mail']").html("Email:<span class='emailFieldBlank'>Email field should not be blank</span>");
        $(".emailFieldBlank").css("color", "red");
        $(".emailFieldBlank").css("position", "absolute");
        $(".emailFieldBlank").css("transform", "translateX(50%)");
        $("fieldset:last").append("<div class='emailBlankBox'><br><br><div class='emailBlank'>To register, you must enter an email.</div></div>");
        $(".emailBlank").css("color", "red");
        if($(".emailBlankBox").length === 2) {
            $(".emailBlankBox")[0].remove();
        }
    } 
    
    else if(!$("#mail").val().match(emptyFieldRegex) && $("#mail").val().match(emailValidator)) {
        $("[for = 'mail']").html("Email:");
        $("#mail").css("border", "none");
        $(".emailBlankBox").remove();
    }
});