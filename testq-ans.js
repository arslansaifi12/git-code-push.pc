// // //q.{1} Write a function to remove duplicates from an array of integers.

// let removeduplicate=(arr)=>{

//    let duplicate=[]

// for(let i=0;i<arr.length; i++){
//     let isunique=false;
//     for(let j=i+1; j<arr.length; j++){

//         if (arr[i]==arr[j]) {
//             isunique=true;
            
//         }

//         if (isunique) {
//             duplicate[duplicate.length]=arr[i]
//            break;
//         }

//     }
// }
// return duplicate;

// }




// let rv1=removeduplicate([5, 3, 6, 3, 2, 5, 8, 2])
// console.log(rv1);




// // // /Q{5}.Write a function to reverse a string without using built-in functions.

// let reverseString=(str)=>{

//    let arr=str.split(" ")

// let end=arr.length-1

// for (let i=end; i>=0; i--){
//     console.log(arr[i]);
    
// }

// }
// reverseString("my name is arslan")


   

// // //Q{2} Write a function to find the second largest number in an array.

// let secondlargest=(arr)=>{

// let max=arr[0]
// let secondmax=arr[0];

// for(let i=0; i<arr.length; i++){
//         if (max<arr[i]) {
//             secondmax=max
//             max=arr[i]
            
//         }

//         if (secondmax<arr[i] && arr[i] !== max) {
            
//             secondmax=arr[i]
            
            
            
//         }
     
        
//     }
//     return secondmax;
// }

// let rv2=secondlargest([ 40,20,8,9,50,30,45,30,47])
// console.log(rv2);


// // 10. Write a function to find the first non-repeating character in a string.

// let onetime=(str)=>{

//    let arr=str.split("");
// onetime=[]

// for (let i=0; i<arr.length; i++){
//    let isunique=true;
//    for(let j=0; j<arr.length; j++){
//       if (arr[i]==arr[j] && i!==j) {
//          isunique =false;
//          break;

//       }
    
//    }
   
//    if (isunique) {
//       onetime[onetime.length]=arr[i]
//    }


// }
   
// return onetime;

// }
// let rv6=onetime("level")
// console.log(rv4);





// // //Q.{3}-Write a function to merge two arrays and return a sorted array without duplicates.

// function mergearrAndsort(arr1,arr2) {

// let onearr=arr1.concat(arr2)

// let removeduplicate1=[]

// for(let i=0; i<onearr.length; i++){
//    for (let j=i+1; j<onearr.length; j++){

//        if (onearr[i]>onearr[j]) {
//            let temp=onearr[i]
//            onearr[i]=onearr[j]
//            onearr[j]=temp
           
//        }

//    }
   
// }

// // for(let i=0; i<onearr.length; i++){
// //    let isunique=true;
// //    for(let j=i+1; j<onearr.length; j++){
// //        if (onearr[i]==onearr[j]) {
// //            isunique=false;
// //            break;
           
// //        }
// //    }
// //        if(isunique){
// //            removeduplicate1[removeduplicate1.length]=onearr[i]
           
// //        }
       
// // }

// //    return removeduplicate1
// // }

// // let rv3=mergearrAndsort([5,3,6,2],[3,9,1,6])

// // console.log(rv3);





// // // Q{4}.Write a function to rotate an array by  positions.

// // function rotatearr(arr) {

// //    let end=arr.length-1
// // let endvalue=[]

// for(let i=end; i>2; i--){

// //   endvalue[endvalue.length]=arr[i]
 
// // }

// // console.log(endvalue);

// // let exchange=endvalue.concat(arr)

// // return exchange
// // }
// // let rv4=rotatearr([1,2,3,4,5])
// // console.log(rv4);



// // //Q{6}.Write a function to count the occurrences of each character in a string.

// // let reverseStringCharacter=(str)=>{

// //    let arr=str.split("")
// // let ans=""
// // let end=arr.length-1

// for (let i=end; i>=0; i--){
//     ans=ans+arr[i]
   
    
// // }
// // return ans


// // }

// // let ans=reverseStringCharacter("I am the best")
// // console.log(ans);

                         
 
   
    


