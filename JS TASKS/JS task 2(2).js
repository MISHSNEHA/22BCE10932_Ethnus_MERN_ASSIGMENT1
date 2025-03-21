function sortString(str) {
    return str.split('').sort().join('');
}

let input = "webmaster";
let sortedOutput = sortString(input.toLowerCase());

console.log(sortedOutput); 
