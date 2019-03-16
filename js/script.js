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