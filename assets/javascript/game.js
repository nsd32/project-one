$(document).ready(function() {

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


  var count = 0;
  var ref = database.ref('/players');
  var playerKey;
  var holes = 0;
  
  
  // localStorage.setItem('holeNumber', 1)
  // var playerName = $('#player-name');
  // var scoreDisplay = $('#total-score');
  
  // var totalScore = 0;

  // scoreDisplay.text(localStorage.holeNumber)
  
  
  var playerId = localStorage.userKey;
  
  console.log(playerId)
  // -Ksl05fwsmjuMTiaY8X1

  $('#add-player').click(function() {

    newPostRef = ref.push({
      // name: 'nick',
      // holeOne: 0,
      // holeTwo: 0,
      // holeThree: 0,
      // holeFour: 0,
      // holeFive: 0,
      // holeSix: 0,
      // holeSeven: 0,
      // holeEight: 0,
      // holeNine: 0
      // hole1: {
      // 	number: 1,
      // 	score: 0
      // }
    });
    // grabbing unique id from push method above on line 27
    localStorage.setItem('userKey', newPostRef.key);
    playerId = localStorage.userKey;
    // storing unique id in local storage for access later
    
    console.log(playerId);

    $(this).hide();

    window.location.href = 'game.html';
    // -Ksl0zBnDxzbM-9XsOh3

  })

  // if (gameState === 'joined') {

  database.ref('/players/' + playerId).on('value', function(snap) {
      
      var holeNumber = snap.val().holeNumber;
      console.log(holeNumber)
      $('#hole-number').text(holeNumber);

	  $('#submit').click(function() {
	  	location.reload()
	    // defining path to update user's score with unique id from local storage
	    var score = Number($('#score').val());
	    // updating player scores based on what hole they are on
	    
	      switch (holeNumber) {
	        case Number(1):
	          database.ref('/players/' + playerId).update({
	            holeOne: score,
	            holeNumber: holeNumber + 1
	            
	          })
	          
	          break;

	        case Number(2):
	          database.ref('/players/' + playerId).update({
	            holeTwo: score,
	            holeNumber: holeNumber + 1
	          })
	          
	          break;

	        case Number(3):
	          database.ref('/players/' + playerId).update({
	            holeThree: score,
	            holeNumber: holeNumber + 1
	          })
	          
	          break;

	        case Number(4):
	          database.ref('/players/' + playerId).update({
	            holeFour: score,
	            holeNumber: 5
	          })
	          
	          break;

	        case Number(5):
	          database.ref('/players/' + playerId).update({
	            holeFive: score,
	            holeNumber: 6
	          })
	          
	          break;

	        case Number(6):
	          database.ref('/players/' + playerId).update({
	            holeSix: score,
	            holeNumber: 7
	          })
	          
	          break;

	        case Number(7):
	          database.ref('/players/' + playerId).update({
	            holeSeven: score,
	            holeNumber: 8
	          })
	          
	          break;

	        case Number(8):
	          database.ref('/players/' + playerId).update({
	            holeEight: score,
	            holeNumber: 9
	          })
	          
	          break;

	        case Number(9):
	          database.ref('/players/' + playerId).update({
	            holeNine: score,
	            holeNumber: 10
	          })
	          
	          break;

	      }
	    

	      // $('#hole-number').text(localStorage.holeNumber)
	      // $('#hole').text(localStorage.holeNumber - 1)
	    
	    // database.ref('/players/' + playerId).on('value', function(snap) {

	    //   $('#hole-number').text(snap.val().holeNumber + 1)
	    //   $('#hole-number').text(snap.val().holeNumber + 1)

	    // })
	    // totalScore += count;
	    // scoreDisplay.text(totalScore);

	    // $('#score').text(totalScore)
        
        var score = Number($('#score').val(''));
	    
	    // count = 0;
	    
	    // $('#count').text(count);
	    // $('#hole-number').text(holeNumber);

	  })


      
    }, function(errorObject) {
      console.log('the read failed ' + errorObject.code)
    });

  // }

  // ref.on('child_added', function(snap) {

  //   var newPlayer = snap.val().name
    
    
  //   var tableRow = $('<tr>')
  //   $('#tbody').append(tableRow);
  //   tableRow.append('<td>' + newPlayer)
  //   tableRow.append('<td id="score">' + snap.val().holeOne)
  //   tableRow.append('<td id="hole">' + 0) 
  //   // tableRow.append('<td>' + playerScore)

    

  // })

  // database.ref('/players/' + playerId).on('value', function(snap) {
  //   var totalScore = snap.val().holeOne 
  //   $('#total-score').text(totalScore)
  //   $('#hole-number').text(snap.val().holeNumber)
    
  // });

  $('#leaderboard').click(function() {

    window.location.href = 'leaderboard.html';
    

  })

  $('#plus').click(function() {

    count++
    $('#count').text(count);
    

  })

  $('#minus').click(function() {

    count--
    $('#count').text(count);

  })



  

  $('#end-game').click(function() {

    localStorage.removeItem('userKey');
    console.log(localStorage.userKey);
    $('#add-player').show();

  })








});