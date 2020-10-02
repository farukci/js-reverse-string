function reverseString(str){
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    // return joinArray;
    document.querySelector("#display").innerText = joinArray;
}

// console.log(reverseString("hello"));

const input = document.querySelector("#r-input");
const button = document.querySelector("#r-button");


button.addEventListener("click", button => {
    reverseString(input.value);
});


