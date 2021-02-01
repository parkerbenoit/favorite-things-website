$(document).ready(function() {
let newArray = []
  $("form#selector").submit(function (event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();

    newArray.push(question1.toUpperCase(), question2.toUpperCase(), question3.toUpperCase());
    let sortArray = newArray.sort();
    console.log(sortArray);
    

    sortArray.forEach(function(word) {
    $("ul").append(`<li>${word}</li>`);
    });
    $("#selector").hide();
  });
});
 
/* const arrayOfThingsILike = ["bubble baths", "kittens", "good books", "clean code"];
arrayOfThingsILike.forEach(function(thing) {
  $("#likable-things").append(" " + thing + "!")
});
*/


// newArray.forEach(function(word) {
//   console.log(word.toUpperCase());
// });

  //  newArray.splice(1, 0, newArray)



    // let responses = [question1, question2, question3]

    /* $("button").click(function(){
      $("p").html("Hello <b>world</b>!");
    });
    */

/*
   $(document).ready(function() {
    $("button#hello").click(function() {
      $("ul").prepend("<li>Hello!</li>");
    });
  
    $("button#goodbye").click(function() {
      $("ul").prepend("<li>Goodbye!</li>");
    });
  
    $("button#stop").click(function() {
      $("ul").prepend("<li>Stop copying me!</li>");
    });
  });
  */