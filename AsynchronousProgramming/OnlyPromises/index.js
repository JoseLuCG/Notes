/**
 * ------------------------------------
 * Basic structure to create a promise:
 * ------------------------------------
 */
/*
const newPromise = new Promise(
    (resolve, reject)=>{
        resolve(result);
        reject(error);
    }
);
*/

/**
 * ------------------------------
 * Example of a promise creation:
 * ------------------------------
 */

//Here create the promise:
const ramdomOdd = new Promise(
    (resolve, reject)=> {
        //Create a ramdom number.
        const number = Math.floor(Math.random()*10);
        if (number %2 !== 0) resolve(number);
        reject(number);
    }
);

//Here manage the promise:
ramdomOdd
.then(
    odd => console.log("A odd:", odd)
)
.catch(
    even => console.error("It went bad:", even) 
)

/**
 * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * Adapt a async function who use callbacks at a model
 * of promises that permit us use async/await.
 */

function getLocation () {
    const geolocalization = new Promise(
        (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (data) => resolve(data), //Callback if good.
                (error) => reject(error) //Calback if bad.                
            )
        }
    );
    return geolocalization;
}

getLocation().then().catch();