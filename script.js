let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#massege");
const userPara=document.querySelector("#user-score");
const comPara=document.querySelector("#comp-score");
const ComputerChoices=()=>{
    const option=["rock","paper","scissors"];
      let val=Math.floor(Math.random() * option.length);
    return option[val];
    
}
const drawGame=()=>{
    msg.innerText="Game Was Draw.Play Again!";
    msg.style.backgroundColor = "#06135a";
}
const showResult=(userWin,Userchoice,comChoice)=>{
    if(userWin)
    {   
        userscore++;
        userPara.innerText=userscore;
        msg.innerText=`You Win.your ${Userchoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comscore++;
        comPara.innerText=comscore;
        msg.innerText=`You lost. ${comChoice} beats. your ${Userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame=( Userchoice)=>{
         const comChoice=ComputerChoices();
         if(Userchoice===comChoice)
         {
            drawGame();
         }
         else{
            let userWin=true;
            if(Userchoice==="rock")
            {
                userWin=comChoice==="paper"?false:true;
            }
            else if(Userchoice==="paper")
            {
                userWin=comChoice==="scissors"?false:true;
            }
            else{
                userWin=comChoice==="rock"?false:true;
            }
            showResult(userWin,Userchoice,comChoice);
         }
}
choices.forEach((choice) => {   
    choice.addEventListener("click", () => {
        const item = choice.getAttribute("id");
       playgame(item);
    });
});