var A =document.getElementById("demo");  


function vote(){
    var input = document.getElementById("Number").value;
    if(input<0){
      A.innerHTML ="❌invallid Age";
      A.style.color="red";
    }
    else if(input>=0 && input <=10){
        A.innerHTML ="👶not eligible your to young"
        A.style.color="blue";

    }
    else if(input>=11 && input <=17){
        A.innerHTML ="🚶you are vating age is  soon..."
        A.style.color="green";
    }
    else if(input>=18 && input <=104){
        A.innerHTML ="✔️eligible"
        A.style.color="yellow";
    }
    else if (input>=105){
        A.innerHTML = " 😔 your need a special permission"
        A.style.color="black";
    }
}
