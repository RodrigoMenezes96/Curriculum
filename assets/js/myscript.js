/* verificar se o elemento esta visivel SE VISIVEL ocultar 
		o bloco e troca o nome do botão para mostrar bloco,
		SE NÃO mostrar botão e mudar nome botão para ocultar bloco*/

        var idBottonOne = document.getElementById("idBottonOne");
        idBottonOne.addEventListener("click", function () {
            if (document.getElementById("idObjetivo").style.display === "block") {
                document.getElementById("idObjetivo").style.display = "none";
                document.getElementById("idBottonOne").innerHTML = "Show Objetivos"
            } else {
                document.getElementById("idObjetivo").style.display = "block";
                document.getElementById("idBottonOne").innerHTML = "Hide Objetivos"
            }
        });
    
        var idBottonTwo = document.getElementById("idBottonTwo");
        idBottonTwo.addEventListener("click", function () {
            if (document.getElementById("idFormacao").style.display === "block") {
                document.getElementById("idFormacao").style.display = "none";
                document.getElementById("idBottonTwo").innerHTML = "Show Formação"
            } else {
                document.getElementById("idFormacao").style.display = "block";
                document.getElementById("idBottonTwo").innerHTML = "Hide Formação"
            }
        });
    
        var idBottonThree = document.getElementById("idBottonThree");
        idBottonThree.addEventListener("click", function () {
            if (document.getElementById("idExperiencias").style.display === "block") {
                document.getElementById("idExperiencias").style.display = "none";
                document.getElementById("idBottonThree").innerHTML = "Show Experiências"
            } else {
                document.getElementById("idExperiencias").style.display = "block";
                document.getElementById("idBottonThree").innerHTML = "Hide Experiências"
            }
        });
   