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
  var holeNumber = 1
  var playerName = $('#player-name');
  var totalScore = 0;
  var scoreDisplay = $('#total-score');

  // -Ksl05fwsmjuMTiaY8X1

  $('#add-player').click(function() {

    newPostRef = ref.push({
      name: 'nick',
      holeOne: 0,
      holeTwo: 0,
      holeThree: 0,
      holeFour: 0,
      holeFive: 0,
      holeSix: 0,
      holeSeven: 0,
      holeEight: 0,
      holeNine: 0,
      totalScore: totalScore += count
    });

    // grabbing unique id from push method above on line 27
    playerKey = newPostRef.key;
    // storing unique id in local storage for access later
    localStorage.setItem('userKey', playerKey);

    console.log(playerKey);
    // -Ksl0zBnDxzbM-9XsOh3

  })

  $('#plus').click(function() {

    count++
    $('#count').text(count);
    

  })

  $('#minus').click(function() {

    count--
    $('#count').text(count);

  })



  $('#submit').click(function() {

    // defining path to update user's score with unique id from local storage
    var updatePlayer = database.ref('/players/' + localStorage.userKey);
    
    // updating player scores based on what hole they are on
    switch (holeNumber) {
      case 1:
        updatePlayer.update({
          holeOne: count,
          totalScore: totalScore += count
        })
        break;

      case 2:
        updatePlayer.update({
          holeTwo: count,
        })
        break;

      case 3:
        updatePlayer.update({
          holeThree: count,
        })
        break;

      case 4:
        updatePlayer.update({
          holeFour: count,
        })
        break;

      case 5:
        updatePlayer.update({
          holeFive: count,
        })
        break;

      case 6:
        updatePlayer.update({
          holeSix: count,
        })
        break;

      case 7:
        updatePlayer.update({
          holeSeven: count,
        })
        break;

      case 8:
        updatePlayer.update({
          holeEight: count,
        })
        break;

      case 9:
        updatePlayer.update({
          holeNine: count,
        })
        break;

    }

    updatePlayer.on('value', function(snap) {
      var playerUpdate = snap.val()
      scoreDisplay.text(playerUpdate.totalScore);
    })

    totalScore += count;
    // scoreDisplay.text(totalScore);

    holeNumber++
    count = 0;

    $('#count').text(count);
    $('#hole-number').text(holeNumber);

  })













});