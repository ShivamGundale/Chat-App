const socket = io('https://localhost:3000');

const form = document.getElementById("send-container");
const msgInp = document.getElementById("msgInp");
const msgcontainer=document.querySelector(".container");

const append=(message,position)=>{
    const msgElement = document.createElement('div');
    msgElement.innerHTML = message;
    msgElement.classList = position;
    msgcontainer.append(msgElement);
}
let nam = prompt("Enter your name " );
socket.emit('new-user-joined', nam)

socket.on("user-joined", (nam)=>{
    append(`${nam} joined now`,`right`); 
})
