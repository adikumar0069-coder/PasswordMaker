/* composition of password loweralph = 25%(26), upperalph = 25%(26), specialSymb = 25%(28), numbers = 25%(10);
step 1 - select the given percentage of element randomly form given arry
step 2 - concatinate the selected element 
step 3 - suffle them rendomly */
const specialSymb = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', '"', ',', '.', '<', '>', '/', '?'];
const upperalph = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const loweralph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers =  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//creating pass of 12 digit, 3 from upperalph, 3 from loweralph, 3 from specialsymbl, 3 from numbers

function Random(max, min){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
document.getElementById("generate").onclick = function(){
    let specialSymb1 = specialSymb[Random(27, 0)]
    let specialSymb2 = specialSymb[Random(27, 0)]
    let specialSymb3 = specialSymb[Random(27, 0)]
    let upperalph1 = upperalph[Random(25, 0)]
    let upperalph2 = upperalph[Random(25, 0)]
    let upperalph3 = upperalph[Random(25, 0)]
    let loweralph1 = loweralph[Random(25, 0)]
    let loweralph2 = loweralph[Random(25, 0)]
    let loweralph3 = loweralph[Random(25, 0)]
    let numbers1 = numbers[Random(9, 0)]
    let numbers2 = numbers[Random(9, 0)]
    let numbers3 = numbers[Random(9, 0)]
    let unshaffle_pass = [specialSymb1, specialSymb2, specialSymb3, upperalph1, upperalph2, upperalph3, loweralph1, loweralph2, loweralph3, numbers1, numbers2, numbers3]
   // let Password = unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)] + unshaffle_pass[Random(0, 11)]
   let Password = ""
   

for (let i = unshaffle_pass.length - 1; i > 0; i--) {
  let j = Random(i, 0)
  let temp = unshaffle_pass[i]
  unshaffle_pass[i] = unshaffle_pass[j]
  unshaffle_pass[j] = temp
}

Password = unshaffle_pass.join("")
    document.getElementById("display_pass").textContent = `Your password is ${Password}`
}