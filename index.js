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
 