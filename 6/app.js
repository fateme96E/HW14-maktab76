$(document).ready(function () {
    $('<div class="todo-list"></div>').insertBefore(".form-container"); //to add a div(.todo list) before form container only once
})

$("button").click(function(e){
    let todo = $("input").val();
    if (todo.length > 0) {
        $(".todo-list").append(`<div class="item-container">${todo}</div>`);
    } else {
        alert("Please enter a valid input!");
    }
    $("input").val("");
});

$(".todo-container").click(function (e) {
    if ($(e.target).hasClass("item-container")) {
        $(e.target).remove();
    }
    
});


