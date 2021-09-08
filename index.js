// const angles = document.querySelectorAll(".angle-input");
// const checkBtn = document.querySelector("#check-is-triangle");
// const message = document.querySelector("#message-box");


// function sumOfAngles(angle1,angle2,angle3){
//     return angle1+angle2+angle3;

//     // console.log(angle1 + angle2 + angle3);
// }

// function validateTriangle(){

//     const sum = sumOfAngles(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
    

//     if(sum === 180){
//         console.log("yes it is a valid triangle");
//         message.innerText = "yes it is a valid triangle";
//     }
//     else{
//         console.log("nope it is not a valid triangle");
//         message.innerText = "nope it is not a valid triangle";
//     }
// }


// checkBtn.addEventListener('click',()=>{
//     validateTriangle();
// });

//code for the second part

const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-answers");
const outputMessage = document.querySelector("#output-message");

const answers = ["90°","right angled"];

function calculateScore(){
    let score=0,index=0;

    const FormResults = new FormData(quizForm);

    // console.log(FormResults);
    for(let value of FormResults.values()){
        // console.log(value);

        if(value === answers[index++]){
            score++;
        }
    }

    // console.log(score);

    return score;
}



checkBtn.addEventListener('click',()=>{

    const score = calculateScore();

    outputMessage.innerText = "your score is " + score;

});