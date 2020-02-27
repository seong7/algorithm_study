/** 
* Primality Test (Trial Division vs. Fermat's Test)
* Goal: Compare leading trial division tests with
* Fermat primality test
*/
// NUMBER TO TEST
var numtest = 5;
// Carmichal Numbers: 561 , 1105  , 8911
// Big Primes: 44721359 , 54734431

// ERROR (number of iterations)
var numTrials = 20;

// Algorithm A step counter
var Asteps = 1;
// Algorithm B step counter
// var Bsteps = 1;

 /**
* Fast Modular Exponentiation
* Input: factor, power, modulus
* Output: factor^power % modulus
*/ 
var fastermod = function(factor,power,modulus){
   var result = 1;
   while(power > 0){
       if (power % 2 === 1){
           result = (result*factor) % modulus;
           power = power-1;
       }
   power = power/2;
   factor = (factor*factor)%modulus;
   }
   return result;
};

/**
* GCD (greatest common divisor)
* Input: two integers (x,y)
* Output: greatest common divisor of x & y
*/ 
var gcd = function(x, y){
   while (y !== 0) {
       var z = x % y;
   x = y;
   y = z;
 }
 return x;
};

 /**
* Fermat Primality Test
* Input: a single integer we want to test (numtest)
* Output: TRUE if prime, FALSE if composite
* 
*/ 
var isPrimeA = function(inputNum){
   // step counter
   Asteps += 1;
   
   // run through numTrials
   for (var trial = 0; trial < numTrials; trial++){
       // increment step counter
       Asteps += 6;

       // generate a between 1 and inputNum - 1
       var randTest = Math.floor((Math.random()*(inputNum-2)))+2;

       // check if common factor exists
       if (gcd(randTest,inputNum) !== 1){
       // factor was found, therefore composite
       return false;
       }
       
       // fermat test
      if (fastermod(randTest,inputNum-1,inputNum)!== 1){
      // must be composite
       return false;
       }
       
   } // end for loop
   
   return true;
};





// ***********DISPLAY***************** 

// ALGORITHM A

// if prime output prime
if (isPrimeA(numtest) === true){
  console.log(true)
}
