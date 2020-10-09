window.onload = function () {
    let titleCont = document.getElementsByClassName("title-container")[0]
        .children;

    for (let i = 0; i < titleCont.length; i++) {
        titleCont[i].addEventListener("mouseover", productIn);
        titleCont[i].addEventListener("mouseout", productOut);
    }

    function productIn() {
        let titleId = this.id;
        let aceiteTipo = titleId;
        let envaseImg = document.getElementById("envase-" + aceiteTipo);
        console.log(aceiteTipo, envaseImg);

        if (envaseImg.style.transitionTimingFunction == "ease-in") {
            envaseImg.style.transitionTimingFunction = "ease-out";
        }

        switch (titleId) {
            case "gasolina":
                envaseImg.style.right = "280px";
                break;
            case "diesel":
                envaseImg.style.right = "280px";
                break;
            case "borda":
                envaseImg.style.right = "280px";
                break;
            case "motos":
                envaseImg.style.right = "280px";
                break;
            case "transmisiones":
                envaseImg.style.right = "280px";
                break;
            case "industriales":
                envaseImg.style.right = "280px";
                break;
        }
    }

    function productOut() {
        let titleId = this.id;
        let aceiteTipo = titleId;
        let envaseImg = document.getElementById("envase-" + aceiteTipo);
        envaseImg.style.right = "-3000px";
        envaseImg.style.transitionTimingFunction = "ease-in";
        console.log(aceiteTipo);
    }
};
