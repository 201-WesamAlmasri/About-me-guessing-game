'use strict';

function check(promptMessage, yesMessage, noMessage, correctAnswer) {

  let value = '';

  while ((value !== 'y' && value !== 'yes') && (value !== 'n' && value !== 'no')) {
    value = prompt(promptMessage).toLowerCase();
    if (value === 'y' || value === 'yes') {
      alert(yesMessage);
      if (correctAnswer === 'yes') {
        points = points + 1;
      }
    } else if (value === 'n' || value === 'no') {
      alert(noMessage);
      if (correctAnswer === 'yes') {
        points = points + 1;
      }
    } else {
      alert('Invalid  answer ');
    }
  }
}

// Asking the user about his name

let userName = prompt('Enter your name please.');
console.log('The user name is ' + userName);
alert('Hello ' + userName + ', Welcome to my webiste.');

let points = 0;

// Question 1

check('Do you want to play a guessing game with us? y/yes or n/no', 'good choice ' + userName + ' you will enjoy this with us','Why you do not want to play with us ' + userName + ', it will be funny to play so lets start now.','yes');

// Question 2
check('Do you think I am a nice person? y/yes or n/no' ,'You are genius ' + userName + ' you was able to know that I am a nice person.' ,'Why do you think that ' + userName + ', Actually I am a very nice and lovely person' ,'yes');

// Question 3

check('Have I ever traveled out of jordan before ? y/yes or n/no' ,'Yes, you are right ' + userName + ' I traveled before, I was in Russia this was an amazing experience to me.' ,'No ' + userName + ', Actually I traveled before to Russia and it  was an amazing experience to me', 'yes');

// Question 4

check('Do you think I will mind to help other ? y/yes or n/no' ,'Then you do not know mell well yet ' + userName + ', In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something. ' ,'I think you have an experience with people ' + userName + ', yes you are right. In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something.' ,'no');

// Question 5
check('Do I have a previous experience with web development before the course from ASAC ? y/yes or n/no' ,'I do not know how you could guess that ' + userName + ', you are right I have some experience with web development using python .' ,'This is not true ' + userName + ', I have some experience with web development using python.', 'yes' );

// Question 6



function checkRandomNumber(){
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log('the random number is ', randomNumber);

  for (let tryNumber = 1; tryNumber <= 4; tryNumber++) {
    let guessedNumber = Number(prompt('I have a number in my mind from 1 to 100, guess the number. You have four attempts.'));
    console.log('The number that the user guessed is ' + guessedNumber);

    if (guessedNumber < randomNumber) {
      alert('Attemp number ' + tryNumber + '. The number were too low,');
      if (tryNumber === 4) {
        alert('You could not guess the number, my number was ' + randomNumber);
      }
    } else if (guessedNumber > randomNumber) {
      alert('Attemp number ' + tryNumber + '. The number were too high,');
      if (tryNumber === 4) {
        alert('You could not guess the number, my number was ' + randomNumber);
      }
    } else if (guessedNumber === randomNumber) {
      alert('Attemp number ' + tryNumber + '. You guessed it, this is the number that I choosed ' + randomNumber);
      points = points + 1;
      break;
    } else {
      alert('Attemp number ' + tryNumber + 'Invalid input!');
    }
  }
}

checkRandomNumber();


// Question 7 with multiple correct values
let answers = ['habieb', 'naseem', 'waseem', 'nadeem'];
let correct = false;

function checkBrotherName(){
  for (let attemptNumber = 1; attemptNumber <= 6; attemptNumber++) {
    let brotherName = prompt('Guess on of my brothers name? you have 6 attempts. ').toLowerCase();
    console.log('The name that the user guessed is ' + brotherName);

    for (let j = 0; j < answers.length; j++) {
      if (brotherName === answers[j]) {
        correct = true;
        break;
      } else {
        correct = false;
      }
    }
    if (correct) {
      points = points + 1;
      alert('Attemp number ' + attemptNumber + '. You guessed it, this is one of my brothers name');
      alert('I have four brothers and their names ' + `${answers[0]}, ${answers[1]}, ${answers[2]} and ${answers[3]}`);
      break;
    } else {
      alert('Attemp number ' + attemptNumber + '. Wrong answer! ');
      if (attemptNumber === 6) {
        alert('You could not guess any name. I have four brothers and their names ' + `${answers[0]}, ${answers[1]}, ${answers[2]} and ${answers[3]}`);
      }
    }
  }
}

checkBrotherName();


alert('Finally thank you ' + userName + ', your score is ' + points + '/7. Good luck and I hope you enjoyed the game it alot.');
