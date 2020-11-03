var okok = document.querySelector('button')
var hello = document.getElementById('con')
hello.style.display = "none";

var i = 0;
console.log(i)

function adding(){
  i++;
  console.log(i)
  if(i%2 === 0){
    end();
    console.log("display none");
  }else{
    on();
    console.log("diplay flex");
  }
}

function on(){
  hello.style.display = "flex";
  console.log("true");
}

function end(){
  hello.style.display = "none";
  console.log("ok");
}


