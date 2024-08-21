
let isXfirst = true;
let x = 0;
let Winner = "";
let last_Winner = "X";
function clear(){
    let a = document.querySelectorAll('.c');
    a.forEach(ax=>{
      ax.textContent ="";
    });
}
function process(str){
    
    if(isXfirst&&document.getElementById(str).textContent==""){
        document.getElementById(str).textContent="X";
        isXfirst=!isXfirst;
        x++;
       
        
    }
    else if(!isXfirst&&document.getElementById(str).textContent==""){
        document.getElementById(str).textContent="O";
        isXfirst=!isXfirst;
        x++;
      
    }

    if(x>=5){  decide(x);   }
}

function decide(x){


 const  e1 = document.getElementById('id1').textContent;
 const  e2 = document.getElementById('id2').textContent;
 const  e3 = document.getElementById('id3').textContent;
 const  e4 = document.getElementById('id4').textContent;
 const  e5 = document.getElementById('id5').textContent;
 const  e6 = document.getElementById('id6').textContent;
 const  e7 = document.getElementById('id7').textContent;
 const  e8 = document.getElementById('id8').textContent;
 const  e9 = document.getElementById('id9').textContent;
   
 if((e1=="X"&&e2=="X"&&e3=="X")||(e1=="O"&&e2=="O"&&e3=="O")){
    Winner = e1;
 }
 else if((e1=="X"&&e4=="X"&&e7=="X")||(e1=="O"&&e4=="O"&&e7=="O")){
    Winner = e1;
 }
 else if((e1=="X"&&e5=="X"&&e9=="X")||(e1=="O"&&e5=="O"&&e9=="O")){
    Winner = e1;
 }
 else if((e2=="X"&&e5=="X"&&e8=="X")||(e2=="O"&&e5=="O"&&e8=="O")){
    Winner = e2;
 }
else if((e3=="X"&&e5=="X"&&e7=="X")||(e3=="O"&&e5=="O"&&e7=="O")){
    Winner = e3;
 }
else if((e3=="X"&&e6=="X"&&e9=="X")||(e3=="O"&&e6=="O"&&e9=="O")){
    Winner = e3;
 }
else if((e4=="X"&&e6=="X"&&e5=="X")||(e4=="O"&&e6=="O"&&e5=="O")){
    Winner = e4;
 }
else if((e7=="X"&&e8=="X"&&e9=="X")||(e7=="O"&&e8=="O"&&e9=="O")){
    Winner = e7;
 }


  check();

}

function check(){
    if(Winner==="X"){
        document.getElementById('display').textContent ="Winner is X";
        Winner = "";
        last_Winner="X";
        isXfirst=true;
        x = 0;
        clear();
    }
    if(Winner==="O"){
        document.getElementById('display').textContent ="Winner is O";
        Winner = "";
        last_Winner="O";
        isXfirst = false;
        x = 0;
        clear();
    }
    if(x==9&&Winner==""){
        document.getElementById('display').textContent ="";
        x = 0;
        clear();
    }
}


