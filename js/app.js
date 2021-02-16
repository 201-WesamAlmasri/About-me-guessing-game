'use strict';

// Asking the user for his name
let userName = prompt('Enter your name please.');
console.log('The user name is ' + userName);
alert('Hello ' + userName + ', Welcome to my webiste.');

let points = 0;

// Question 1
let wantToPlay = '';

while((wantToPlay !== 'y' && wantToPlay !== 'yes') && (wantToPlay !== 'n' && wantToPlay !== 'no')){
  wantToPlay = prompt('Do you want to play a guessing game with us? y/yes or n/no').toLowerCase();
  console.log('The user wants to play a game? ' + wantToPlay);

  if(wantToPlay === 'y' || wantToPlay ==='yes'){
    alert('good choice ' + userName + ' you will enjoy this with us' );
    points = points + 1;
  } else if(wantToPlay === 'n' || wantToPlay ==='no'){
    alert('Why you do not want to play with us ' + userName + ', it will be funny to play so lets start now.' );
  } else {
    alert('Invalid  answer ' + userName);
  }
}


// Question 2
let nicePerson = '';

while((nicePerson !== 'y' && nicePerson !== 'yes') && (nicePerson !== 'n' && nicePerson !== 'no')){
  nicePerson = prompt('Do you think I am a nice person? y/yes or n/no').toLowerCase();
  console.log('The user think I am a nice person? ' + nicePerson);

  if(nicePerson === 'y' || nicePerson ==='yes'){
    alert('You are genius ' + userName + ' you was able to know that I am a nice person.' );
    points = points + 1;
  } else if(nicePerson === 'n' || nicePerson ==='no'){
    alert('Why do you think that ' + userName + ', Actually I am a very nice and lovely person' );
  } else {
    alert('Invalid answer ' + userName);
  }
}

// Question 3
let traveledBefore = '';
while((traveledBefore !== 'y' && traveledBefore !== 'yes') && (traveledBefore !== 'n' && traveledBefore !== 'no')){
  traveledBefore = prompt('Have I ever traveled out of jordan before ? y/yes or n/no').toLowerCase();
  console.log('The user answer if I traveled before? ' + traveledBefore);

  if(traveledBefore === 'y' || traveledBefore ==='yes'){
    alert('Yes, you are right ' + userName + ' I traveled before, I was in Russia this was an amazing experience to me.' );
    points = points + 1;
  } else if(traveledBefore === 'n' || traveledBefore ==='no'){
    alert('No ' + userName + ', Actually I traveled before to Russia and it  was an amazing experience to me' );
  } else {
    alert('Invalid answer ' + userName);
  }
}



// Question 4
let loveToHelpOthers = '';
while((loveToHelpOthers !== 'y' && loveToHelpOthers !== 'yes') && (loveToHelpOthers !== 'n' && loveToHelpOthers !== 'no')){
  loveToHelpOthers = prompt('Do you think I will mind to help other ? y/yes or n/no').toLowerCase();
  console.log('The user think that I love to help other? ' + loveToHelpOthers);
  if(loveToHelpOthers === 'y' || loveToHelpOthers ==='yes'){
    alert('Then you do not know mell well yet ' + userName + ', In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something. ' );
  } else if(loveToHelpOthers === 'n' || loveToHelpOthers ==='no'){
    alert('I think you have an experience with people ' + userName + ', yes you are right. In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something.' );
    points = points + 1;
  } else {
    alert('Invalid answer ' + userName);
  }
}


// Question 5
let knowAboutProgramming = '';
while((knowAboutProgramming !== 'y' && knowAboutProgramming !== 'yes') && (knowAboutProgramming !== 'n' && knowAboutProgramming !== 'no')){
  knowAboutProgramming = prompt('Do I have a previous experience with web development before the course from ASAC ? y/yes or n/no').toLowerCase();
  console.log('The user think that I love to help other? ' + knowAboutProgramming);

  if(knowAboutProgramming === 'y' || knowAboutProgramming ==='yes'){
    alert('I do not know how you could guess that ' + userName + ', you are right I have some experience with web development using python and if you want to see one of my project that I have made, send me a message.' );
    points = points + 1;
  } else if(knowAboutProgramming === 'n' || knowAboutProgramming ==='no'){
    alert('This is not true ' + userName + ', I have some experience with web development using python and if you want to see one of my project that I have made, send me a message.' );
  } else {
    alert('This is not true ' + userName + ', I have some experience with web development using python and if you want to see one of my project that I have made, send me a message.' );
  }
}

// Question 6
let randomNumber = Math.floor(Math.random()*100 + 1);
console.log('the random number is ', randomNumber);

for(let tryNumber = 1; tryNumber <= 4; tryNumber++){
  let guessedNumber = prompt('I have a number in my mind from 1 to 100, guess the number. You have four attempts.');
  console.log('The number that the user guessed is ' + guessedNumber);

  if (guessedNumber < randomNumber){
    alert('Attemp number ' + tryNumber + '. The number were too low,');
    if(tryNumber === 4){
      alert('You could not guess the number, my number was ' + randomNumber);
    }
  } else if(guessedNumber > randomNumber){
    alert('Attemp number ' + tryNumber + '. The number were too high,');
    if(tryNumber === ){
      alert('You could not guess the number, my number was ' + randomNumber);
    }
  } else {
    alert('Attemp number ' + tryNumber + '. You guessed it, this is the number that I choosed ' + randomNumber);
    points = points + 1;
    break;
  }
}

// Question 7 with multiple correct values
let answers = ['habieb', 'naseem', 'waseem', 'nadeem'];
let correct = false;

for(let attemptNumber = 1; attemptNumber <= 6; attemptNumber++){
  let brotherName = prompt('Can you guess on of my brothers name? you have 6 attempts. ').toLowerCase();
  console.log('The name that the user guessed is ' + brotherName);

  for(let j = 0; j < answers.length; j++){
    if (brotherName === answers[j]){
      correct = true;
    } else {
      correct = false;
    }
  }
  if(correct){
    points = points + 1;
    alert('Attemp number ' + attemptNumber + '. You guessed it, this is one of my brothers name');
    alert('I have four brothers and their names ' + `${answers[0]}, ${answers[1]}, ${answers[2]} and ${answers[3]}`);
    break;
  } else {
    alert('Attemp number ' + attemptNumber + '. Wrong answer! ');
    if(attemptNumber === 6){
      alert('You could not guess any name. I have four brothers and their names ' + `${answers[0]}, ${answers[1]}, ${answers[2]} and ${answers[3]}`);
    }
  }
}

alert('Finally thank you ' + userName + ', your score is ' + points + '/7. Good luck and I hope you enjoyed the game it alot.' );
