
(function(){

    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");

    var snake = [
        {x:50, y: 100, oldX: 0, oldY:0},
        {x: 50, y: 90, oldX: 0, oldY:0},
        {x: 50, y: 80, oldX: 0, oldY:0},
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
            snake[index].oldX = value.x;
            snake[index].oldY = value.y;

           if(index == 0){
               if(keyPressed==DOWN){
                   snake[index].y = value.y + blockSize;
               } else if(keyPressed==UP){
                    snake[index].y = value.y - blockSize;
               }else if(keyPressed==RIGHT){
                    snake[index].x = value.x + blockSize;
                }else if(keyPressed==LEFT){
                    snake[index].x = value.x - blockSize;
                }
           }else{
               snake[index].x = snake[index - 1].oldX;
               snake[index].y = snake[index - 1].oldY;

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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    $(document).keydown(function(e){
        keyPressed = e.which;
    });

});