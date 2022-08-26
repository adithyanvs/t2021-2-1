//Problem-4
//code created in javaScript

let checker =[1,2,3,4,5,6,7,8,9]//values to be checked

let input =[1,2,8,9,12,46,76,82,15,20,30]//input value 

var output={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}//output object initial declaration

let len = input.length//used to store length of the input array


for(i=0;i<9;i++){
    let multiple =0;
    for(k=0;k<len;k++){
        if(input[k]%checker[i]===0){
            multiple+=1
        }
    }
    
    output[i+1] = multiple//store multiples as key value pair

}
console.log(output);//display output 