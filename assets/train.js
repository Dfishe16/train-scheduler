// firebase i learned in project 1
   var config = {
    apiKey: "AIzaSyBb8uzmH3YYCgxBQfPreJoRN7dKg5x7WnI",
    authDomain: "train-scheduler-ba005.firebaseapp.com",
    databaseURL: "https://train-scheduler-ba005.firebaseio.com",
    projectId: "train-scheduler-ba005",
    storageBucket: "train-scheduler-ba005.appspot.com",
    messagingSenderId: "250324077966",
    appId: "1:250324077966:web:941d6e383363ba0b2928df"
  };

  
  
  firebase.initializeApp(config);

var database = firebase.database();

var messagesRef = firebase.database().ref('messages');


document.getElementById('trainForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();




var trainName = getInputVal('trainName');
var trainDestination = getInputVal('trainDestination');
var firstTrainTime = getInputVal('firstTrainTime');
var frequency = getInputVal('frequency');


saveMessage(trainName, trainDestination, firstTrainTime, frequency)

}





function getInputVal(id){
    return document.getElementById(id).value;

}


function saveMessage(trainName, trainDestination, firstTrainTime, frequency) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        trainName: trainName,
        trainDestination: trainDestination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
    });
}

// js function to add a row when user inputs info

function addRow()
{

    var trainName = document.getElementById('trainName').value;
    var trainDestination = document.getElementById('trainDestination').value;
    var firstTrainTime = document.getElementById('firstTrainTime').value;
    var frequency = document.getElementById('frequency').value;


    var table = document.getElementsByTagName('table')[0];
      

    var newRow = table.insertRow(table.rows.length/2+1);
      

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
      

      cel1.innerHTML = trainName;
      cel2.innerHTML = trainDestination;
      cel3.innerHTML = firstTrainTime;
      cel4.innerHTML = frequency;
}


// still working on time section have some questions