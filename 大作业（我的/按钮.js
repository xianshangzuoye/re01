var interactButton = document.querySelector(".interact_button");
var progressBar = document.querySelector(".progress_bar");

let width = interactButton.getBoundingClientRect().width;

let interactTime = 5000;

interactButton.addEventListener("click",()=>{
    interactButton.classList.remove("interacted");
    interactButton.classList.add("interacting");

    setTimeout(()=>{
        interactButton.classList.replace("interacting","interacted");
        window.location.href = './冷笑话展示页面.html'; 
    }, interactTime);

    let start = null;
    function grow(timestamp) {
        if(!start) start = timestamp;

        let progress = timestamp - start;
        progressBar.style.width = `${Math.min(width*(progress/interactTime),width)}px`;
        if(progress < interactTime) {
            window.requestAnimationFrame(grow);
        }

    }
    window.requestAnimationFrame(grow);
});
