/**
 * Async/await example:
 */

console.log("Start program:");

//Execute the fetch:
async function fetchAsync () {
    try {
        /* In this case, we store the fetch in a constant,
        then, we had another await, because ".json" is asynchronous.       
        */ 
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/table");
        const json = await response.json();
        console.log("Resultado awaits:",json[0].meanings[0].definitions[0].definition)
    } catch (err) {
        console.log(err);
    }
}
fetchAsync();
console.log("End program")