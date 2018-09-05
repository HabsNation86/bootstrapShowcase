console.log(" jQuery");

// Isolated french button
$("#frenchButton").on("click", function(){
  console.log("test1");
});

// Isolated english button
$("#englishButton").on("click", function(){
  console.log("test2");
});

// Isolated "Entreprise Loyal"
$(".navbar-brand").on("click", function(){
  console.log("test3");
});