/**
 * Callback example:
 */

// Firts create the callbacks:

function myFunctionIfGood (position){
    console.log(position);
}
function myFunctionIfBad (err) {
    console.error(err);
}

/* In this case we request the location at the navigator.
   and this response with your response. */
console.log("Request location");
navigator.geolocation.getCurrentPosition( myFunctionIfGood , myFunctionIfBad );
console.log("program end");

