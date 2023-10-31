const cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"]


function chauchat(carga) {
    if (Math.random() * 100 > 80) {
        console.log("Illo, me he quedao pillá!");
    } else {
        for (i = 0; i < carga.length; i++) {
            if (i % 3 == 0 && i !==0) {
                console.log("\n")
                console.log(carga[i])
            } else {
                console.log(carga[i]);
            }
        }
    }
}

// One line solution:

const chauchatV2 = (carga) => Math.random() * 100 > 80 ? console.log("Illo, me he quedao pillá!") : carga.forEach((bullet, i) => i % 3 == 0 && i !== 0 ? console.log("\n" + bullet) : console.log(bullet))

