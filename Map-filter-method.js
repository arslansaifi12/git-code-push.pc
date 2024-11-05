//Map method

let arr = [10,20,30,40,50]
let rv=arr.map(function name(value,ind,arr) {
    // console.log(value,ind);
    // // console.log(ind);
    // // console.log(arr);
    return value
    // return arr
    
    
});

console.log(rv);


//---------------------------------------------------------------------------------------------------------------------------------------------------------------



//filter method

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let rv2 =arr2.filter((maal)=>{
   
    return maal%2!=0
    

})

// console.log(rv2);


let rv3=rv2.reduce(function name(cv,ci) {
    return cv+ci
})

console.log(rv3);
