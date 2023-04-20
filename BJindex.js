
let firstCard =5
let secondCard = 10
let anotherCard = 10
let sum = firstCard + secondCard
let hasBJ = false
let  isAlive = true
                                //dzialajacy przyklad if:
                                // if (sum < 21){
                                //     console.log("new card?")
                                // } else if (sum===21){
                                //     console.log("You've got BlackJack'!")
                                // } else if (sum > 21){
                                // console.log("You lost. Try again!")
                                // }
                                    //  function disableBtn() {
                                    //    document.getElementById("showCards-El").disabled = true;
                                    //  }
function showcards() {
    //document.getElementById("spanT").style.visibility = "visible";
    //document.getElementById("sumT").style.visibility = "visible";
    document.getElementById("cardsOnTable-El").textContent = "Cards on the table:" + " "
    document.getElementById("firstCard-El").textContent = firstCard + " "
    document.getElementById("secondCard-El").textContent = secondCard + " "
    document.getElementById("sumOfCards").textContent = "Sum=" + sum
    document.getElementById("message").textContent = "Try one more?"
}
    if (sum < 21){
    console.log("new card?")
    
    function addCard() {
        document.getElementById("anotherCard-El").textContent = anotherCard
        let sum = firstCard + secondCard + anotherCard
        document.getElementById("sumOfCards").textContent = "Sum=" + sum  
        if (sum!=21){
            document.getElementById("message").textContent = "Ups...try again!"
            isAlive = false
        }
  
    }
} else if (sum===21){
    console.log("You've got BlackJack'!")
    function hideBtn() {
       document.getElementById("showCards-El").style.visibility = "hidden";
       document.getElementById("addCard-El").style.visibility = "hidden";
      }
    document.getElementById("firstCard-El").textContent = firstCard + " "
    document.getElementById("secondCard-El").textContent = secondCard + " "
    
    document.getElementById("sumOfCards").textContent = "Sum=" + sum
    document.getElementById("message").textContent = "You won!"
    hasBJ = true
    hideBtn()
    
} else if (sum > 21){
console.log("You lost. Try again!")
isAlive = false
}
// //poniżej w miare działa
// function showcards() {
//     // document.getElementById("spanT").style.visibility = "visible";
//     // document.getElementById("sumT").style.visibility = "visible";
//     document.getElementById("firstCard-El").textContent = firstCard + " "
//     document.getElementById("secondCard-El").textContent = secondCard + " "
//     document.getElementById("sumOfCards").textContent = "Sum=" + sum
// }
// // let anotherCard = 2                  //<- czemu nie da się funkcji zdefiniować tutaj i potem ją wywołać w if?
// // function addCard() {
// //     document.getElementById("anotherCard-El").textContent = anotherCard
// //     let sum = firstCard + secondCard + anotherCard
// //     document.getElementById("sumOfCards").textContent = "Sum=" + sum

    
// if (sum<21){
//     // function addCard()    //- takie wywołanie nie działa
//   let anotherCard = 4
//  function addCard() {
//      document.getElementById("anotherCard-El").textContent = anotherCard
//      let sum = firstCard + secondCard + anotherCard
//      document.getElementById("sumOfCards").textContent = "Sum=" + sum
// }

// if(sum === 21) {
//     //czemu nie
//     // document.getElementById("firstCard-El").textContent = firstCard + " "
//     // document.getElementById("secondCard-El").textContent = secondCard + " "
//     document.getElementById("firstCard-El").textContent = firstCard + " "
//     document.getElementById("secondCard-El").textContent = secondCard + " "
//     document.getElementById("sumOfCards").textContent = "Sum=" + sum
//     document.getElementById("sumOfCards").textContent = "You won!"
// }


// if(sum>21){
// alert("You loose. Try again!")
//     document.getElementById("sumOfCards").textContent = "You loose. Try again!" 
// }
// }
// //let message= " "
// // if (sum===21){
// //     alert(!!!)
// //     //document.getElementById("sumOfCards").textContent = "You won!"
// //  }
// //  else if (sum < 21){
// //      alert("You are close!")
// //  }
// //  else if(sum > 21){
// //      alert("You loose. Try again!")
// //  }
