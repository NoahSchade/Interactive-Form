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


$("#design").change(function(){
    $("label[for ='color']").show();
    $("select#color").show();
     showHideColor();
     designColorMatch();
});

function showHideColor() {
    if($("select#design option:first").is(':selected')){
        $("label[for ='color']").hide();
        $("select#color").hide();
    } else {
        $("label[for ='color']").show();
        $("select#color").show();
    }
}

function designColorMatch() {
    if($("select#design option:nth-child(2)").is(':selected')){
        $("option[value ='tomato']").hide();
        $("option[value ='steelblue']").hide();
        $("option[value ='dimgrey']").hide();

        $("option[value ='cornflowerblue']").show();
        $("option[value ='darkslategrey']").show();
        $("option[value ='gold']").show();

        $("select#color").val("cornflowerblue");
    } else if($("select#design option:nth-child(3)").is(':selected')) {
        $("option[value ='tomato']").show();
        $("option[value ='steelblue']").show();
        $("option[value ='dimgrey']").show();

        $("option[value ='cornflowerblue']").hide();
        $("option[value ='darkslategrey']").hide();
        $("option[value ='gold']").hide();

        $("select#color").val("tomato");
    }
}