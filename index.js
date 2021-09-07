let numberofBtns = document.querySelectorAll(".sigh").length;

for (let i = 0; i < numberofBtns; i++){

    document.querySelectorAll(".sigh")[i].addEventListener("click", function () {

        this.style.backgroundColor = "lightblue"

    })

}

function buttonPressed() {

}