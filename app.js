const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your age? ', (answer) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(answer);
  computeAge(age,5);
  computeAge(age,20);
  computeAge(age,30);
  rl.close();
});

function computeAge(age,increment){
    
    var test = age + increment;
    
    
if(test < 15)
  console.log('After '+increment+' years: '+'I don\'t have to think about my life yet');


else if(test >15 && test<30)
  console.log('After '+increment+' years: '+'I need to finish studies and find a job');


else if(test >30 && test<35)
  console.log('After '+increment+' years: '+'I need to marry');


else if(test >35 && test<40)
  console.log('After '+increment+' years: '+'I need to rear children');


else if(test >=40 && test<=59)
  console.log('After '+increment+' years: '+'Prepare to retire');


else if(test >=60)
  console.log('After '+increment+' years: '+'I will now retire');


}