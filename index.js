//click

let action = document.querySelector("button").addEventListener("click", function(){
    
// setting random image     
    let randomCoin = Math.floor(Math.random() * 2) + 1;
    let randomImg = "images/coin" + randomCoin + ".png";
    let randomImageSource = document.querySelector("img").setAttribute("src", randomImg);

// determining the winner
    if(randomCoin === 2){
        document.querySelector("h2").innerHTML = "Head Won🚩";
    }
    else if(randomCoin === 1){
        document.querySelector("h2").innerHTML = "Tale Won🚩";
    }
    
    else{
        return "Thanks for using flip Da coin";
    }
});

