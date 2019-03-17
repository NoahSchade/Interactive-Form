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

// const actRegex = /.*Tuesday 9am-12pm.*/;
// let $activity;

// for(let i = 2; i <= $(".activities label").length + 1; i++) {
//     // console.log($(`.activities label:nth-child(${i})`).text());

//     $activity = $(`.activities label:nth-child(${i})`).text()

//     if($activity.match(actRegex)){
//         console.log($(`.activities label:nth-child(${i})`).text());
//     }

// }

$('[type = "checkbox"]').click(function() {
    if($("[name = 'js-frameworks']").is(':checked')) {
        console.log("test");
    }
});