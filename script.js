
(function(){

    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");

    var snake = [
        {x:50, y: 100},
        {x: 50, y: 90},
        {x: 50, y: 80},
    ];
    var snakeWidth = snakeHeight = 10;
    var blockSize = 10;

    const LEFT =37;
    const UP =38;
    const RIGHT =39;
    const DOWN =40;

    var keyPressed = DOWN;

    setInterval(gameLoop, 1000);

    function gameLoop(){

        console.log('loop running')
        clearCanvas();
        moveSnake();
        drawSnake();
    }

    function moveSnake(){
        $.each(snake, function(index, value){
           if(index == 0){
               if(keyPressed==DOWN){
                   snake[index].y = value.y + blockSize;
               }
           }
        });
    }


    function drawSnake(){
        $.each(snake, function(index, value){
            ctx.fillStyle = 'red';
            ctx.fillRect(value.x, value.y, snakeWidth, snakeHeight);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(value.x, value.y, snakeWidth, snakeHeight);
        });
    }

    function clearCanvas(){
        ctx.clearRect();
    }

});