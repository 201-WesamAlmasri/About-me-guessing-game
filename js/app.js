'use strict';

let userName = prompt('Enter your name please.');
console.log('The user name is ' + userName);
alert('Hello ' + userName + ', Welcome to my webiste.');

let wantToPlay = prompt('Do you want to play a guessing game with us? y/yes or n/no');
console.log('The user wants to play a game? ' + wantToPlay);

if(wantToPlay.toLowerCase() === 'y' || wantToPlay.toLowerCase() ==='yes'){
  alert('good choice ' + userName + ' you will enjoy this with us' );
} else if(wantToPlay.toLowerCase() === 'n' || wantToPlay.toLowerCase() ==='no'){
  alert('Why you do not want to play with us ' + userName + ', it will be funny to play so lets start now.' );
} else {
  alert('Lets start the game now ' + userName);
}

let nicePerson = prompt('Do you think I am a nice person? y/yes or n/no');
console.log('The user think I am a nice person? ' + nicePerson);

if(nicePerson.toLowerCase() === 'y' || nicePerson.toLowerCase() ==='yes'){
  alert('You are genius ' + userName + ' you was able to know that I am a nice person.' );
} else if(nicePerson.toLowerCase() === 'n' || nicePerson.toLowerCase() ==='no'){
  alert('Why do you think that ' + userName + ', Actually I am a very nice and lovely person' );
} else {
  alert('Actually I am a very nice and lovely person' + userName);
}

let traveledBefore = prompt('Have I ever traveled out of jordan before ? y/yes or n/no');
console.log('The user answer if I traveled before? ' + traveledBefore);

if(traveledBefore.toLowerCase() === 'y' || traveledBefore.toLowerCase() ==='yes'){
  alert('Yes, you are right ' + userName + ' I traveled before, I was in Russia this was an amazing experience to me.' );
} else if(traveledBefore.toLowerCase() === 'n' || traveledBefore.toLowerCase() ==='no'){
  alert('No ' + userName + ', Actually I traveled before to Russia and it  was an amazing experience to me' );
} else {
  alert('Actually I traveled before to Russia and it  was an amazing experience to me');
}

let loveToHelpOthers = prompt('Do you think I will mind to help other ? y/yes or n/no');
console.log('The user think that I love to help other? ' + loveToHelpOthers);

if(loveToHelpOthers.toLowerCase() === 'y' || loveToHelpOthers.toLowerCase() ==='yes'){
  alert('Then you do not know mell well yet ' + userName + ', In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something. ' );
} else if(loveToHelpOthers.toLowerCase() === 'n' || loveToHelpOthers.toLowerCase() ==='no'){
  alert('I think you have an experience with people ' + userName + ', yes you are right. In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something.' );
} else {
  alert('In fact I love to help others and this make me feel better. Don not hesitate to ask me anything if you need something.');
}

let knowAboutProgramming = prompt('Do I have a previous experience with web development before the course from ASAC ? y/yes or n/no');
console.log('The user think that I love to help other? ' + knowAboutProgramming);

if(knowAboutProgramming.toLowerCase() === 'y' || knowAboutProgramming.toLowerCase() ==='yes'){
  alert('I do not know how you could guess that ' + userName + ', you are right I have some experience with web development using python and if you want to see one of my project that I have made, send me a message.' );
} else if(knowAboutProgramming.toLowerCase() === 'n' || knowAboutProgramming.toLowerCase() ==='no'){
  alert('This is not true ' + userName + ', I have some experience with web development using python and if you want to see one of my project that I have made, send me a message.' );
} else {
  alert('This is not true ' + userName + ', I have some experience with web development using python and if you want to see one of my project that I have made, send me a message.' );
}

alert('Finally thank you ' + userName + ', for trying the game with us and I hope you enjoyed it alot.' );
