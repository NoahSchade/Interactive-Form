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
    
    for(let i = 1; i <= $("#design option").length; i++){
        // console.log($(`#design option:nth-child(${i})`).text());

        if($(`#design option:nth-child(${i})`).text() === "Select Theme"){
            $(`#design option:nth-child(${i})`).remove();
        };

        if($(`#design option:nth-child(${i})`).filter(':selected').text() === "Theme - JS Puns") {
            const regex = /.*JS Puns.*/;
            for(let i = 1; i <= $("#color option").length; i++){
                     const $colorText = $(`#color option:nth-child(${i})`).text();
                     const $colorElement = $(`#color option:nth-child(${i})`);
                     if($colorText.match(regex)){
                        $colorElement.show();
                     } else {
                        $colorElement.hide();
                     }
                }
            }

            // if($(`#design option:nth-child(${i})`).text() === "Theme - I &#9829; JS") {
            //     const regex = /.*JS Puns.*/;
            //     for(let i = 1; i <= $("#color option").length; i++){
            //              const $colorText = $(`#color option:nth-child(${i})`).text();
            //              const $colorElement = $(`#color option:nth-child(${i})`);
            //              if($colorText.match(regex)){
            //                 $colorElement.show();
            //              } else {
            //                 $colorElement.hide();
            //              }
            //     }
            // }
        }
    }
);

// var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// var regex = /[A-Z]/g;
// var found = paragraph.match(regex);

// console.log(found);
// expected output: Array ["T", "I"]