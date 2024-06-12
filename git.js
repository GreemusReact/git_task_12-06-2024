function even(arr){
    let array = [];
    for(i=1;i<=arr.length;i++){
        if(i%2==0){
            array.push(i)
        }
    }
    return array
}
let array = [1,2,3,4,5,6,7,8]
let res = even(array)
console.log(res)