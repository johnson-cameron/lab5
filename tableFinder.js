"use strict";

$(document).ready(() => {
// do everything in this
    let table = $(".available");
    let button = $("#submitRes");
    let exit = $("img");
    

    $(document).on("click", ".available", (event) => {
        $(".form").fadeIn(1000)
        $("#tabnum").text(`Table Number: ${$(event.target).text()}`)
        $("#name").val("")
        $("#phone").val("")
        $("#party").val("")
        exit.click(() => {
            $(".form").hide()
            event = "";
        });
        
        // when the button is clicked the clicked element adds the reserved class and removes the available class
        // then 
        button.click(() => {
            $(".form").hide()
            $(event.target).addClass("reserved").removeClass("available")
            $(event.target).attr("name", $("#name").val());
            $(event.target).attr("phone", $("#phone").val());
            $(event.target).attr("size", $("#party").val());
            event= "";
        });
    })
    .on("mouseleave", ".reserved", (event) => {
        console.log("it left")
        $(".info").html("");
        $(".info").hide();

    })
    .on("mouseenter", ".reserved", (event) => {
        let table = $(event.target).contents();
        $(".info").append(`<p>Name: ${$(event.target).attr("name")}</p><p>Party Size: ${$(event.target).attr("size")}</p>`);
        table.fadeIn(1000);
    });
    
});