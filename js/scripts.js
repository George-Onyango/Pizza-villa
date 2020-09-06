$(document).ready(function(){
    $("#order").click(function(){
        $("#king").toggle();
    });
    $("#btn").click(function(event){
        var client=$("#nameDetail").val();
        alert(' Dear '  + client + ' we have received the message you have sent. Kindly note that your feedback is highly appreciated ');
        event.preventDefault();
    });
    $('#size').click(function(){
        var total = 0;
    });
    $("#size").each(function(){
        total += parseInt($(this).val());
    });

});

