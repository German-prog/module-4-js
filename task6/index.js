const array = [88, 2, -13, -5, 20, 4, -1, 48];
let res = 0;
const add = [];
for(addArr of array) {
    if(addArr > 0) {
        add.push(addArr)
    }
}
console.log(add)