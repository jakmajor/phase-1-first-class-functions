function receivesAFunction (callback) {
    return callback();
} 

function returnsANamedFunction(){
    return function test(){
     }
}

    function returnsAnAnonymousFunction(){
        return function(){
    }
    }


   
    
    
    // The returnsANamedFunction function should:
    
    // take no arguments
    // return a named function
    
    
    // The returnsAnAnonymousFunction function should:
    
    // take no arguments
    // return an anonymous function