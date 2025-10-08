let userscore=0;
let cmpscore=0;
let restartbtn = document.querySelector("#restart");
restartbtn.addEventListener("click",()=>{
    userscore=0;
    cmpscore=0;
    uwin.innerText = userscore;
    cwin.innerText = cmpscore;
    result.innerText = "Game restarted! Make your move";

})
const generatecmpchoice = ()=>{
    let option = ["rock","paper","scissor"] ;
    let idx=Math.floor(Math.random()*3);
    return option[idx];
};
const showwinner = (userwin,userchoice,cmpchoice) =>{
      if (userwin) {
        userscore++;
        uwin.innerText = userscore;
        result.innerText = `You Won! ${userchoice} beats ${cmpchoice}`;
        scoremsg.style.backgroundColor = "#00C851";
   }      
    else {
        cmpscore++;
        cwin.innerText = cmpscore;
        result.innerText = `You Lost! ${cmpchoice} beats ${userchoice}`;
        scoremsg.style.backgroundColor = "#F44336";

    }
};
const playgame = (userchoice) => {
    let cmpchoice= generatecmpchoice();
        if(userchoice===cmpchoice) {
            result.innerText = "Game is Draw. Play game again";
            scoremsg.style.backgroundColor = "#FFC107"

        }

        else{
            let userwin=true;
            if(userchoice==="rock"){
              userwin=cmpchoice==="paper"? false : true ;
            }else if(userchoice==="paper"){
                userwin= cmpchoice==="scissors"? false:true;
            }else{
                userwin=cmpchoice==="rock"?false:true;
            }
              showwinner(userwin,userchoice,cmpchoice);
            }
       };


const choices = document.querySelectorAll(".choice");
let result=document.querySelector("#result");
let uwin=document.querySelector("#user_score");
let cwin=document.querySelector("#cmp_score");
let scoremsg =document.querySelector(".msg")

choices.forEach((choice )=>{
    choice.addEventListener("click",()=>{
            let userchoice= choice.getAttribute("id");
            playgame(userchoice);
    })
})