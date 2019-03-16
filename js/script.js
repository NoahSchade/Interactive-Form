$("#name").focus();

const $other_title = $('#other-title');

$other_title.hide();

// $("select #title").change(change);

document.getElementById("title").addEventListener("change", myFunction, true);

function myFunction() {
        if($("[value ='other']").is(':selected')){
            $other_title.show();
        } else {
            $other_title.hide();
        }
}



// function myFunction() {
//     if($("[value='other']")) {
//         $other_title.show();
//     } else {
//         $other_title.hide();
//     }
// }
// });
