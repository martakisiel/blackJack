
let firstCard = 2



let secondCard = 15

let sum = firstCard + secondCard



function showcards() {
    document.getElementById("firstCard-El").textContent = firstCard
    document.getElementById("secondCard-El").textContent = secondCard
    document.getElementById("sumOfCards").textContent = "Sum=" + sum

}
if (sum === 21) {
    //alert(!!!)
    document.getElementById("sumOfCards").textContent = "You won!"
}
else if(sum!=21){
let anotherCard = 1
function addCard() {
    document.getElementById("anotherCard-El").textContent = anotherCard
    let sum = firstCard + secondCard + anotherCard
    document.getElementById("sumOfCards").textContent = "Sum=" + sum
}
}

//let message= " "
// if (sum===21){
//     alert(!!!)
//     //document.getElementById("sumOfCards").textContent = "You won!"
//  }
//  else if (sum < 21){
//      alert("You are close!")
//  }
//  else if(sum > 21){
//      alert("You loose. Try again!")
//  }
