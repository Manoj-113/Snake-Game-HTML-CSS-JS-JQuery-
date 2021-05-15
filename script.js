
(function(){

    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");

    var snake = [
        {x:50, y: 100, oldX: 0, oldY:0},
        {x: 50, y: 90, oldX: 0, oldY:0},
        {x: 50, y: 80, oldX: 0, oldY:0},
    ];

    var food = { x : 200, y :200, eaten: false};


    var snakeWidth = snakeHeight = 10;
    var blockSize = 10;

    const LEFT =37;
    const UP =38;
    const RIGHT =39;
    const DOWN =40;

    var keyPressed = DOWN;
    var score = 0;

    setInterval(gameLoop, 1000);

    function gameLoop(){

        console.log('loop running')
        clearCanvas();
        drawFood();
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

            if(index == 0){
                if(didEatFood(value.x, food.y, snakeWidth, snakeHeight)){
                    score++;
                    $('#score').text(score);
                    makeSnakeBigger();
                }
            }
        });
    }

    function makeSnakeBigger(){
        snake.push({
            x:snake[snake.length - 1].oldX,
            x:snake[snake.length - 1].oldY
        });
    }

    function didEatFood(x, y){
        return food.x === x && food.y;
    }

    function drawFood(){
        ctx.fillStyle = 'yellow';
            ctx.fillRect(food.x, food.y, snakeWidth, snakeHeight);
    }

    function clearCanvas(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    $(document).keydown(function(e){
        if($.inArray(e.which, [DOWN,UP,LEFT,RIGHT])!= -1){
            keyPressed = checkKeyIsAllowed(e.which);
        }
        keyPressed = checkKeyIsAllowed(e.which);
    });

    function checkKeyIsAllowed(tempKey){
        let key;
        if(tempKey == DOWN){
            key = (keyPressed != UP) ? tempKey : keyPressed;
        }else if(tempKey == UP){
            key = (keyPressed != DOWN) ? tempKey : keyPressed;
        }else if(tempKey == LEFT){
            key = (keyPressed != RIGHT) ? tempKey : keyPressed;
        }else if(tempKey == RIGHT){
            key = (keyPressed != LEFT) ? tempKey : keyPressed;
        }
        return key;
    }

});