function main () {
    console.log("Starting...");
    //Take the access at the DOM objects. In this case all of the page elements.
    const elements = Array.from(document.body.querySelectorAll("*"));

    // This code transform the elements of the DOM in a object for 
    // put a counter in each them.
    const counters = elements.map(
        (item) => {
            const obj = {
                element: item,
                counter: 0,
            }
            item.addEventListener("pointerenter",()=>{
                obj.counter++;
                console.log(obj)
            });
            return obj
        }
    )
}
/*
    This `.addEventListener` make that script not start until the index.html
    will be load completely with the event "load" at the function main. 
*/
window.addEventListener("load", main);