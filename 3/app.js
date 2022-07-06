$(document).ready(function(){
    var newPTag = $("<p>");
    $("body").append(newPTag);

    $("button").click(function(){
        $("p").text($("form").serialize());
    });
});