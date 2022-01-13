var b00, b10, b20, b01, b11, b21, b02, b12, b22, maskel, stats, winner;
var flag00, flag10, flag20, flag01, flag11, flag21, flag02, flag12, flag22;
var remainingcells = 9
mode = 1

maskel = document.getElementById("maskel");
stats = document.getElementById("stats");
winner = document.getElementById("winner");
b00 = document.getElementById("cell00");
b10 = document.getElementById("cell10");
b20 = document.getElementById("cell20");
b01 = document.getElementById("cell01");
b11 = document.getElementById("cell11");
b21 = document.getElementById("cell21");
b02 = document.getElementById("cell02");
b12 = document.getElementById("cell12");
b22 = document.getElementById("cell22");

function play(cellid){
  if (cellid == 00){
    b00.innerText = "x"
    b00.disabled = true
    flag00 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 10){
    b10.innerText = "x"
    b10.disabled = true
    flag10 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 20){
    b20.innerText = "x"
    b20.disabled = true
    flag20 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 01){
    b01.innerText = "x"
    b01.disabled = true
    flag01 = true
   if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 11){
    b11.innerText = "x"
    b11.disabled = true
    flag11 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 21){
    b21.innerText = "x"
    b21.disabled = true
    flag21 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 20){
    b20.innerText = "x"
    b20.disabled = true
    flag20 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 02){
    b02.innerText = "x"
    b02.disabled = true
    flag02 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 12){
    b12.innerText = "x"
    b12.disabled = true
    flag12 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  else if (cellid == 22){
    b22.innerText = "x"
    b22.disabled = true
    flag22 = true
    if (remainingcells > 1){
      compturn()
    }
    else
    {
      checkwinner()
    }
  }
  function compturn(){
    var cellId = "cell"
    var xy = ""
    var computerX = Math.floor(Math.random() * 3);
    var computerY = Math.floor(Math.random() * 3);
    cellId += computerX
    cellId += computerY
    xy += computerX
    xy += computerY
    if (mode == 1){
      if(xy == "00"){
        if (flag00 == true || flag00 == false){
          compturn()
        }
        else {
          b00.innerText = "o"
          b00.disabled = true
          flag00 = false
        }
      }
      else if(xy == "10"){
        if (flag10 == true || flag10 == false){
          compturn()
        }
        else {
          b10.innerText = "o"
          b10.disabled = true
          flag10 = false
        }
      }
      else if(xy == "20"){
        if (flag20 == true || flag20 == false){
          compturn()
        }
        else {
          b20.innerText = "o"
          b20.disabled = true
          flag20 = false
        }
      }
      else if(xy == "01"){
        if (flag01 == true || flag01 == false){
          compturn()
        }
        else {
          b01.innerText = "o"
          b01.disabled = true
          flag01 = false
        }
      }
      else if(xy == "11"){
        if (flag11 == true || flag11 == false){
          compturn()
        }
        else {
          b11.innerText = "o"
          b11.disabled = true
          flag11 = false
        }
      }
      else if(xy == "21"){
        if (flag21 == true || flag21 == false){
          compturn()
        }
        else {
          b21.innerText = "o"
          b21.disabled = true
          flag21 = false
        }
      }
      else if(xy == "02"){
        if (flag02 == true || flag02 == false){
          compturn()
        }
        else {
          b02.innerText = "o"
          b02.disabled = true
          flag02 = false
        }
      }
      else if(xy == "12"){
        if (flag12 == true || flag12 == false){
          compturn()
        }
        else {
          b12.innerText = "o"
          b12.disabled = true
          flag12 = false
        }
      }
      else if(xy == "22"){
        if (flag22 == true || flag22 == false){
          compturn()
        }
        else {
          b22.innerText = "o"
          b22.disabled = true
          flag22 = false
        }
      }
    } else {
        if (cellid == 00){
        b00.innerText = "x"
        b00.disabled = true
        flag00 = true
        if (remainingcells > 1){
          compturn()
        }
        else
        {
          checkwinner()
        }
      }
        else if (cellid == 10){
          b10.innerText = "o"
          b10.disabled = true
          flag10 = false
          checkwinner()
        }
        else if (cellid == 20){
          b20.innerText = "x"
          b20.disabled = true
          flag20 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 01){
          b01.innerText = "x"
          b01.disabled = true
          flag01 = true
         if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 11){
          b11.innerText = "x"
          b11.disabled = true
          flag11 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 21){
          b21.innerText = "x"
          b21.disabled = true
          flag21 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 20){
          b20.innerText = "x"
          b20.disabled = true
          flag20 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 02){
          b02.innerText = "x"
          b02.disabled = true
          flag02 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 12){
          b12.innerText = "x"
          b12.disabled = true
          flag12 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
        else if (cellid == 22){
          b22.innerText = "x"
          b22.disabled = true
          flag22 = true
          if (remainingcells > 1){
            compturn()
          }
          else
          {
            checkwinner()
          }
        }
    }
  }
  remainingcells -= 2
  if (remainingcells <= 0){
    checkwinner()
  }
  checkwinner()
}
function checkwinner(){
  if (flag00 == true && flag10 == true && flag20 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag01 == true && flag11 == true && flag21 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag02 == true && flag12 == true && flag22 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag00 == true && flag01 == true && flag02 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag10 == true && flag11 == true && flag12 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag20 == true && flag21 == true && flag22 == true){
     stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag20 == true && flag11 == true && flag02 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  else if (flag00 == true && flag11 == true && flag22 == true){
    stats.innerText = "Congratulations"
    winner.innerText = "You Won"
    maskel.style.display = "flex"
  }
  
  else if (flag00 == false && flag10 == false && flag20 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag01 == false && flag11 == false && flag21 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag02 == false && flag12 == false && flag22 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag00 == false && flag01 == false && flag02 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag10 == false && flag11 == false && flag12 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag20 == false && flag21 == false && flag22 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag20 == false && flag11 == false && flag02 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  else if (flag00 == false && flag11 == false && flag22 == false){
    stats.innerText = "Owwww, sorry :|"
    winner.innerText = "You Lost"
    maskel.style.display = "flex"
  }
  
  else{
    if(remainingcells <= 0){
      stats.innerText = "Bruuuuuh! :|"
      winner.innerText = "Draw"
      maskel.style.display = "flex"
    }
  }
}
function restartgame(){
  flag00 = null;
  flag10 = null;
  flag20 = null;
  flag01 = null;
  flag11 = null;
  flag21 = null;
  flag02 = null;
  flag12 = null;
  flag22 = null;
  
  b00.disabled = false;
  b10.disabled = false;
  b20.disabled = false;
  b01.disabled = false;
  b11.disabled = false;
  b21.disabled = false; 
  b02.disabled = false; 
  b12.disabled = false; 
  b22.disabled = false;
    
  b00.innerText = ".";
  b10.innerText = ".";
  b20.innerText = ".";
  b01.innerText = ".";
  b11.innerText = ".";
  b21.innerText = ".";
  b02.innerText = ".";
  b12.innerText = ".";
  b22.innerText = ".";
  maskel.style.display = "none";
  remainingcells = 9
}
function toogleMenu(){
  
}