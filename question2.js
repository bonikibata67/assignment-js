//QUESTION TWO

function sumOfNumbers(numbers){
    if (numbers === ""){
        return 0;        
    }
    const numbersString = numbers.join(",");   

    const numbersArray = numbersString.replace(/\D/g, "");

    const finalNumbersArray = numbersArray.split("");

    let total = 0;

    for(let i= 0; i<finalNumbersArray.length; i++){
        total += parseInt(finalNumbersArray[i])
        
    }
    return total

    }
//     let numbers = [1,2,.56,3,4,5,6,7,8,9,10]   
  

// console.log(sumOfNumbers(numbers));