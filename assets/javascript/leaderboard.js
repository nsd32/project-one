var config = {
    apiKey: "AIzaSyA6mxsS2cAS_DekV9WG7oYzqBG7xLZH4QM",
    authDomain: "train-4bfeb.firebaseapp.com",
    databaseURL: "https://train-4bfeb.firebaseio.com",
    projectId: "train-4bfeb",
    storageBucket: "",
    messagingSenderId: "449751538998"
  };

  firebase.initializeApp(config);

  database = firebase.database();

  var ref = database.ref('/players');

  var playerId = localStorage.userKey;
  
  

  ref.on('child_added', function(snap) {

  	var holeOne = snap.val().holeOne;
  	var holeTwo = snap.val().holeTwo;
  	var holeThree = snap.val().holeThree;
  	var holeFour = snap.val().holeFour;
  	var holeFive = snap.val().holeFive;
  	var holeSix = snap.val().holeSix;
  	var holeSeven = snap.val().holeSeven;
  	var holeEight = snap.val().holeEight;
  	var holeNine = snap.val().holeNine;

    var newPlayer = snap.val().name
    var score = $('<td>');
    var thru = $('<td>');
    var tableRow = $('<tr>');
    score.text(holeOne + holeTwo + holeThree + holeFour + holeFive + holeSix + holeSeven + holeEight + holeNine);
    thru.text(snap.val().holeNumber);
    
    
    $('#tbody').append(tableRow);
    tableRow.append('<td>' + newPlayer);
    tableRow.append(score);
    tableRow.append(thru);
    // tableRow.append('<td id="score"');
    // tableRow.append('<td id="hole"');

    
    // tableRow.append('<td>' + playerScore)

    

  })

  // ref.on('child_changed', function(snap) {

  // 	console.log(snap.val())
  // })


  // database.ref('/players/' + playerId).on('value', function(snap) {
        
  //       var tableRow = $('<tr>')
  //       var score = $('<td>');
  // 		var thru = $('<td>');
  //       var playerName = snap.val().name;
  //       var holeOne = snap.val().holeOne;
  //       var holeTwo = snap.val().holeTwo;
  //       var holeNumber = snap.val().holeNumber - 1;
  //       console.log(holeNumber);
  //       score.text(holeOne + holeTwo);
  //       thru.text(holeNumber)
  //       $('#tbody').append(tableRow);
  //       tableRow.append(playerName)
  //       tableRow.append(score);
  //       tableRow.append(thru);
        
  //       // $('#score').text(totalScore)
        
      
  //   }, function(errorObject) {
  //     console.log('the read failed ' + errorObject.code)
  //   });






