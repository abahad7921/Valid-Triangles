const angles = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-is-triangle");
const message = document.querySelector("#message-box");


function sumOfAngles(angle1,angle2,angle3){
    return angle1+angle2+angle3;

    // console.log(angle1 + angle2 + angle3);
}

function validateTriangle(){

    const sum = sumOfAngles(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));
    

    if(sum === 180){
        console.log("yes it is a valid triangle");
        message.innerText = "yes it is a valid triangle";
    }
    else{
        console.log("nope it is not a valid triangle");
        message.innerText = "nope it is not a valid triangle";
    }
}


checkBtn.addEventListener('click',()=>{
    validateTriangle();
});