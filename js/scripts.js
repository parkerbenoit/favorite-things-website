$(document).ready(function() {
let newArray = []
  $("form#selector").submit(function (event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();

    newArray.push(question1.toUpperCase(), question2.toUpperCase(), question3.toUpperCase());

  //  newArray.splice(1, 0, newArray)

    console.log(newArray);

    // let responses = [question1, question2, question3]

    });
});

