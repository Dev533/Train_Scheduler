// all code should go within the document ready function
//$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyCq2_LtgpNzA4bpGfxylZbsi6EdXpZv1jE",
        authDomain: "train-scheduler-39deb.firebaseapp.com",
        databaseURL: "https://train-scheduler-39deb.firebaseio.com",
        projectId: "train-scheduler-39deb",
        storageBucket: "train-scheduler-39deb.appspot.com",
        messagingSenderId: "683415559538"
      };
      firebase.initializeApp(config);

    var database = firebase.database();

   // database.ref("value", function() {
        // This will be the main program driver.
        // This code will run when the page loads and any time we make a change in our database.
        // Get all of the trains from firebase.
        // Show all of the train from firebase in the html.Use jQuery to select or create html elements that show the values from the firebase trains.
        // Append new row to grid container.
   // });

    function getHTMLTrain() {
        var row = $("<div/>");
        row.addClass("row");
        // Use jQuery methods to make the rest of this row by adding more elements for each column.
        return row;
    }

    function addTrainToFirebase() {
        
    }

  function getNextTrainTime(currentTime, firstTrainMilitary, frequency) {
    var nextTrainTime = "get moment object and put here";
    // Use moment.js to calculate nextTrainTime based on currentTime, firstTrainMilitary, and frequency.
    return nextTrainTime;


  }

  $('#submit').on('click', function() {
    // * Train Name
        var trainName = $('#train-name').val().trim();   
    // * Destination 
        var destination = $('#destination').val().trim();    
    // * First Train Time -- in military time
        var firstTrainMilitary = $('#first-train-military-time').val().trim();    
    // * Frequency -- in minutes
        var frequency = $('#frequency').val().trim();

        console.log(trainName, destination, firstTrainMilitary, frequency)
        
        var trainData = {
            trainName : trainName,
            destination : destination,
            firstTrainMilitary : firstTrainMilitary,
            frequency : frequency
        }

        database.ref().push(trainData)
    // Will use firebase to add this train to our database.
  });

  database.ref().on("child_added", function(child_snapshot, previous_child_key) {
      console.log(child_snapshot.val())
      var Name = child_snapshot.val().trainName
      var dest = child_snapshot.val().destination
      var fTM = child_snapshot.val().firstTrainMilitary
      var freq = child_snapshot.val().frequency
      $('#train').append("<div id='name'>"+Name+"</div")
      $('#train').append("<div id='dest'>"+dest+"</div")
      $('#train').append("<div id='fTM'>"+fTM+"</div")
      $('#train').append("<div id='freq'>"+freq+"</div")
      
  })



//End document.ready... no code below this line.
//});

