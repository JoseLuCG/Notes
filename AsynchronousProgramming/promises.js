/**
 * Promises example:
 */

console.log("Start program");

// Execute the fetch
fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/table"
).then(
    response => response.json()
).then(
    data => console.log(
        "Fetch result: ",
        data[0].meanings[0].definitions[0].definition
    )
).catch(
    error => console.error(error)
);

console.log("End program");