/*****************************  1  ***********************/
function iterateAndLogWithFor(n) {
    for (var i=0;i<n;i++){
        if(n%2==0){
            console.log(i +'is even')
        }
       
        else    console.log(i+'is odd')

    }
}
    function iterateAndLogWithWhile(n) {
  var i =0
    while (i<=n) {
        i++ 
     if(n%2==0){
      console.log (i+'is even')
        }
       
           else  console.log(i+'is odd') 
    }}
    /*****************************  2  ***********************/
function iterateAndLogWithFor(n) {
    for (var i=n-1;i>=0;i--){
        if(n%2==0){
            console.log(i +'is even')
        }
       
           else console.log(i+'is odd')

    }
}
function iterateAndLogWithWhile(n) {
    var i=n-1
    while (i>=0){  
      if (n%2===0){      
          console.log(i +'is even')
        }
           else console.log(i+'is odd')
    i--
    }
    
    
}
function reverseIterateAndLogRecursively(n) {
    
    if (n<0){
        return
    } 
    if(n%2===0){
       console.log ( n,'is even ')
    }
    else console.log (n,'is odd')
    
return reverseIterateAndLogRecursively(n-1)
}
 function laughWithFor(number){
    var result=''
    for(var i=1;i<=number;i++){
       result=result+'ha'
    }
    return result 
}
function laughWithWhile(number) {
    var result=''
    var i=1
    while(i<=number){
        result=result +'ha'
        i++
    }
   return result
}
function laughRecursively(number) {
if(number<=0){
    return '' }
    
    return laughRecursively(number-1)+"ha"
}
function weirdDivisionWithFor(n) {
    for(var i=0;i<=n;i++){
        if(n%3===0 && n%5===0){
            console.log( "JuliaJames")
        }
        else if (n%3===0){
            console.log('Julia')
        }
        else if (n%5===0){
            console.log('James')
        }
        else console.log(n)
    }
}
function weirdDivisionWithWhile(n) {
    var i=0
    while (i<=n){
       if(n%3===0 && n%5===0){
            console.log( "JuliaJames")
        }
        else if (n%3===0){
            console.log('Julia')
        }
        else if (n%5===0){
            console.log('James')
        }
        else console.log(n)
    i++
}
}
function inverseWeirdDivisionRecursively(n) {
    if(n===1){
        return }
    if(n%3===0 && n%5===0){
           return( "JuliaJames")
        }
        else if (n%3===0){
           return('Julia')
        }
        else if (n%5===0){
            return 'James'
        }
        return inverseWeirdDivisionRecursively(n-1)
    }
    function sumWithFor(number) {
    var result=0
    for (var i=number; i>=0;i--){
        result=result+i}
        return result 
}
function sumWithWhile(number) {
    if (number===0){
        retrun }
    return number+sumWithWhile(number-1)
}
function factorialRecursively(number) {
    if (number===0){
        return 1
    }
    return number*factorialRecursively(number-1)
}
function rangeFor(min, max) {
    var result=[]
    for (var i =min; i<max;i++){
        result.push(i)
    }
    return result
}
function rangeWhile(min, max) {
    var i =min
    var result=[]
        while(i<max){
            result.push(i)
        i++ }
   return result }
   function reverseWithFor(str) {
    var result= ''
    for(var i = str.length;i>=0;i--){
        result=result+str.charAt(i)
    }
       return result 
}
function reverseWithWhile(str) {
var i=str.length
 var result = '' 
    while(i>=0){
      result=result+str.charAt(i) 
        i--
    }
    return result 
}
