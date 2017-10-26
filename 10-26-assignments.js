console.log(1+1);
let name = "Dara";
console.log("Hello " + name);
var numbers = [47, 22, 48, 22, 13, 85, 33, 19, 24, 36];
function findMin(arr){
    let min;
        for (let i=0; i<arr.length; i++){
            if (arr[i] < arr[i+1]){
                min = arr[i];
            }
        }
        return(min);
    }
}

findMin(numbers)