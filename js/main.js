
ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2 , canv.height/2 , 20 , 20)

setInterval(function(){
  ctx.fillStyle = "Black";
  ctx.fillRect(0,0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py})
  for(let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE , snake[i].y*SIZE, SIZE-2, SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while(snake.length > tail){
    snake.shift();
  };

  if(appleX == px && appleY == py){
    tail++;
    score++;
    appleX = Math.floor(Math.random()*canv.width/SIZE)
    appleY = Math.floor(Math.random()*canv.height/SIZE)
  }
  ctx.fillStyle = "red"
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2)

  if(bananaX == px && bananaY == py){
    tail=tail+2;
    score = score+2;
    bananaX = Math.floor(Math.random()*canv.width/SIZE)
    bananaY = Math.floor(Math.random()*canv.height/SIZE)
  }
  ctx.fillStyle = "yellow"
  ctx.fillRect(bananaX*SIZE, bananaY*SIZE, SIZE-2, SIZE-2)

  if(humanX == px && humanY == py){
    tail=1;
    score =0;
    humanX = Math.floor(Math.random()*canv.width/SIZE)
    humanY = Math.floor(Math.random()*canv.height/SIZE)
  }
  ctx.fillStyle = "beige"
  ctx.fillRect(humanX*SIZE, humanY*SIZE, SIZE-2, SIZE-2)

  if(senzuX == px && senzuY == py){
    tail=tail*2;
    score=tail*2;
    senzuX = Math.floor(Math.random()*canv.width/SIZE)
    senzuY = Math.floor(Math.random()*canv.height/SIZE)
  }
  ctx.fillStyle = "green"
  ctx.fillRect(senzuX*SIZE, senzuY*SIZE, SIZE-2, SIZE-2)

    ctx.font = "16px Arial";
    ctx.fillStyle = "pink";
    ctx.fillText("Score: "+score, 8, 20);

}, 1000/FPS);;
