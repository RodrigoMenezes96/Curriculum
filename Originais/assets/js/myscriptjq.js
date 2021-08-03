/* verificar se o elemento esta visivel SE VISIVEL ocultar 
       o bloco e troca o nome do botão para mostrar bloco,
       SE NÃO mostrar botão e mudar nome botão para ocultar bloco (){Implementando}*/
$(document).ready(function () {
    $("#idBottonOneJq").on("click", function () {
        if ($("#idObjetivo").is(":visible")) {
            $("#idObjetivo").hide(), $("#idBottonOneJq").html("Show Objetivos");
        } else {
            $("#idObjetivo").show(), $("#idBottonOneJq").html("Hide Objetivos");
        }

    });

    $("#idBottonTwoJq").on("click", function () {
        if ($("#idFormacao").is(":visible")) {
            $("#idFormacao").hide(), $("#idBottonTwoJq").html("Show Formação");
        } else {
            $("#idFormacao").show(), $("#idBottonTwoJq").html("Hide Formação");
        }
    });

    $("#idBottonThreeJq").on("click", function () {
        if ($("#idExperiencias").is(":visible")) {
            $("#idExperiencias").hide(), $("#idBottonThreeJq").html("Show Experiências");
        } else {
            $("#idExperiencias").show(), $("#idBottonThreeJq").html("Hide Experiências");
        }

    });
});