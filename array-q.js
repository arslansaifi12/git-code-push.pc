//q.1

// // let arr = [0,10,20,30,]


// // let max=arr[0]
// // let min=arr[0]


// // for(let i=1; i<=arr.length; i++){
// //     if (max<arr[i]) {
// //         max=arr[i]
        
// //     }
// //     if(min>arr[i]){
// //         min=arr[i]
// //     }
// // }


// // let ayera=[-2,-1,0,1,2]


// let arr1=1234567890
// let ans=0
// let pow=1




// while (arr1>0) {
//     let arrld=arr1%10
   
//     arrld=pow*arrld
//     ans=ans+arrld

//     pow=pow*10
//     arr1=

// }
// console.log(ans);



// let str="arslan is the best boy in ";
// let arr =str.split(" ")

// let maxlen=0
// let ans=""

// for(let i=0; i<arr.length; i++){
//     if (arr[i].length>maxlen) {
//         maxlen=arr[i].length
//         ans=arr[i]
        
        
//     }
    
// // }
// console.log(ans)

// console.log(maxlen);





// function checklongstring(str) {

//     let arr =str.split(" ")


    
// let maxlen=0
// let ans=""

// for(let i=0; i<arr.length; i++){
//     if (arr[i].length>maxlen) {
//         maxlen=arr[i].length
//         ans=arr[i]
        
        
//     }
    
// }
// return ans;

// }

// let rv =checklongstring("arslan is the best boy in")

// console.log(rv);



 

// let str="name is arslan name is arslan arslan arslan arslan"

// let word=str.split(" ")

// let frequency="arslan"
// let c=0
// let ans= 0;


// for (let maal of word) {

//     if (maal==frequency) { 
//         c++
//     }
    
// }

// console.log(c);


// for(let i=0; i<word.length; i++){
    
//     if (word[i]==frequency) { 
//         ans=i
//         break;
//     }
    
// }
// console.log(ans);


// let arslan=[10,20,]

// for (let maal of arslan) {
//     console.log(maal);
    
    
// }

// let arr=["arslan",10,20,30]

// for (let maal of arr) {
//     console.log(maal);
    
// }

 


// let arr2=[1,2,50,4,]
// // let pow=1
// let ans1=Math.ceil(arr2.length/2)

// console.log(arr2[ans1]);



// let arr=[1,2,3,4]

// if (arr.length%2==0) {
   
//    let minidex1=Math.floor(arr.length/2)-1

//    let minidex2=Math.ceil(arr.length/2)

//    let sum = arr[minidex1]+arr[minidex2]
//    console.log(sum);
       
// }else{
//     let mid=Math.ceil(arr.length/2)
//     return mid;
//     }





// function medianinarr(arr) {
    
// if (arr.length%2==0) {
   
//     let minidex1=Math.floor(arr.length/2)-1
 
//     let minidex2=Math.ceil(arr.length/2)
 
//     let sum = arr[minidex1]+arr[minidex2]
//     return sum;
        
//  }else{

//     let mid=Math.floor(arr.length/2)
//     return  arr[mid];
 
//  }
    
// }


// let rv=medianinarr([10,20,30,40])
// console.log(rv);



function unique(arr) {
    
    let unique=[]
    for(let i=0; i<arr.length; i++){
        let isunique=true;
        for(let j=i+1; j<unique.length; j++){

            if (arr[i]==arr[j]) {

                isunique=false
                break;

            }      
  
            if (isunique) {
                unique[unique.length]=arr[i]
            }

        }
        
    }

    return unique;
}

let rv=unique([10,10,20,30,30,40,40,60,])

console.log(rv);



let arr = [1,1,2,2,3,4,4,5]

let unique1=[]

for(let i=0; i<arr.length; i++){

    let isunique1=true

    for(let j=i+1; j<arr.length ; j++){

        if (arr[i]==arr[j] ) {    
            
            isunique1=false
          
        } 
        
        if (isunique1) {
            unique[unique.length]=arr[i]
              break;
        }

        
    }

}


console.log(unique);








