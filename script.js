
(function(){

    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");

    var snake = [
        {x:100, y: 100},
        {x: 100, y: 90},
        {x: 100, y: 80},
    ];
    var snakeWidth = snakeHeight = 10;

    drawSnake();

    function drawSnake(){
        $.each(snake, function(index, value){
            ctx.fillStyle = 'red';
            ctx.fillRect(value.x, value.y, snakeWidth, snakeHeight);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(value.x, value.y, snakeWidth, snakeHeight);
        });
    }

});