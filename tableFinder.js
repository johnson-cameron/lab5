"use strict";

$(document).ready(() => {
// do everything in this
let table = $(".available");
let button = $("#submitRes");
let exit = $("img");

table.click(() => {
    $(".form").toggle()
});

button.click(() => {
    $(".form").toggle()
    $(".table").addClass("reserved")
    $(".table").removeClass("available")
});

exit.click(() => {
    $(".form").toggle()
});

});