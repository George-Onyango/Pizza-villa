$(document).ready(function(){
    $("#order").click(function(){
        $("#king").toggle();
    });
    $("#btn").click(function(event){
        var client=$("#nameDetail").val();
        alert(' Dear '  + client + ' we have received the message you have sent. Kindly note that your feedback is highly appreciated ');
        event.preventDefault();
    });
});

var pizzaPrice = { name: "small", price:610, 
    name: "medium" price:880, 
    name: "large" price:1100
};