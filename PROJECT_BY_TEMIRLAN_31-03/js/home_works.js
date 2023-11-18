// // DZ 1-1
// const gmailInput = document.querySelector('#gmail_input')
// const gmailButton = document.querySelector('#gmail_button')
// const gmailResult = document.querySelector('#gmail_result')
//
// const regExp = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/;
//
// gmailButton.onclick = () => {
//     if(regExp.test(gmailInput.value)){
//         gmailResult.innerHTML = 'SUCCESS'
//         gmailResult.style.color = 'green'
//     } else{
//         gmailResult.innerHTML = 'NO'
//         gmailResult.style.color = 'red'
//     }
// }

// //DZ 1-2
// let counter = 0
// function moveBlock() {
//     const child = document.querySelector('.child_block')
//     child.style.left = `${counter}px`
//     counter++
//     if (counter <= 450){
//         requestAnimationFrame(moveBlock)
//     }
// }
// moveBlock()


// // DZ 2-1
// const childBlock= document.querySelector('.child_block')
// let positionX =0
// let positionY =0
// const moveBlock = () => {
//     if (positionX <448 && positionY <= 0) {
//         positionX++
//         childBlock.style.left = `${positionX}px`
//         setTimeout(moveBlock, 1)
//     }else if (positionX >=448 && positionY < 448) {
//         positionY++
//         childBlock.style.top = `${positionY}px`
//         setTimeout(moveBlock, 1)
//     }else if (positionX > 0 && positionY >= 448) {
//         positionX--
//         childBlock.style.left =`${positionX}px`
//         setTimeout(moveBlock,1)
//     }else if (positionX >= 0 && positionY > 0) {
//         positionY--
//         childBlock.style.top =`${positionY}px`
//         setTimeout(moveBlock,1)
//     }
// }
// moveBlock()
//
// // DZ-2/1
// // DOM ELEMENTS GET
// const display = document.getElementById("minutesS");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");
//
// let count = 0;
// let intervalId = null;
//
// //FUNCTION TO INCREASE
// function inCounter() {
//     count++;
//     display.textContent = count;
// }
//
// //START
// startBtn.addEventListener("click", () => {
//     if (!intervalId) {
//         startBtn.disabled = true;
//         stopBtn.disabled = false;
//         intervalId = setInterval(inCounter, 0.001);
//     }
// });
//
// //STOP
// stopBtn.addEventListener("click", () => {
//     if (intervalId) {
//         startBtn.disabled = false;
//         stopBtn.disabled = true;
//         clearInterval(intervalId);
//         intervalId = null;
//     }
// });
//
// //RESET
// resetBtn.addEventListener("click", () => {
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
//     clearInterval(intervalId);
//     intervalId = null;
//     count = 0;
//     display.textContent = count;
// });



