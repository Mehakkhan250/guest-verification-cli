#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to MEHAK KHAN coding school");
console.log("Guest Verification Center");

let myLoop = true;
let myInvitedGuestsList = ["wajid ali mir","sameer khan","muddasir khan","usama vohra"];

while(myLoop){
let userInput = await inquirer.prompt([
    {
     type: "input",
     name: "userName",
     message: "please enter your name",
    }
]);

let guestName = userInput.userName;

let lowerGuestName = guestName.toLowerCase();

if(myInvitedGuestsList.includes(guestName)){
    console.log(`Welcome Mr. ${guestName}! please, make your self comfortable`);
    myLoop = false;
    }else{
        console.log(`\n Sorry Mr ${guestName}. your name is not the guest list for today\n`);

        let askNameAgain = await inquirer.prompt(
            [
                {
                    type: "confirm",
                    name: "otherName",
                    message: "Do yoy have another name to go by? if so, we can check again",
                    default: false,
                
                }
            ])
            if(!askNameAgain.otherName){
                myLoop = false;
                console.log(`/nWe apologize, but you are not in the guest list, please contact the event organizer\n`);
                
            }
        
    }

}


