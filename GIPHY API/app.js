
var animalOne = 'Dog'; 

var queryURL =
   "https://api.giphy.com/v1/gifs/search?q=" +
   animal +
   "YGDDMbLUOCeEtxPuJPAG7K9AwFGbPCkC&q=animal&limit=25&offset=5&rating=PG&lang=en";

   function renderButtons() {
$("button").on("click", showGifs());
   console.log('button clicked!')
// function showGIF() {
   // var clicks = $(this).attr("click-count");
   // var gifTerm = $(this).attr("data-name");
   // var offset = 10 * clicks;
   
   $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function(response) {
      console.log(queryURL);
      console.log(response.data);
      // var response = response.data; is this needed?
      for (var i = 0; i < response.data.length; i++) {
         // Creating and storing a div tag
         var animalDiv = $("<div>");
   
         // Creating a paragraph tag with the result item's rating
         var p = $("<p>").text("Rating: " + response[i].rating);
   
         // Creating and storing an image tag
         var animalImage = $("<img>");
         // Setting the src attribute of the image to a property pulled off the result item
         animalImage.attr("src", response[i].images.fixed_height.url);
   
         // Appending the paragraph and image tag to the animalDiv
         animalDiv.append(p);
         animalDiv.append(animalImage);
   
         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
         $("#gifs-appear-here").prepend(animalDiv);
      }


       
        $("#buttons-view").empty();

        for (var i = 0; i < animals.length; i++) {

          var a = $("<button>");
        
          a.addClass("animal-btn");
        
          a.attr("data-name", animals[i]);
        
          a.text(animals[i]);
    
          $("#buttons-view").append(a);
        }
      

      $("#add-animal").on("click", function(event) {
        event.preventDefault();
        
        var animal = $("#animal-input").val().trim();

       
        animal.push(animal);

        
        renderButtons();
        $(document).on("click", ".animal-btn", displayanimalInfo);
      })

      

   
}
   
}
   
   };