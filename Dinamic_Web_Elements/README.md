# **Documentation**

In this folder have a example of a web with dinamic components. The html code has made by the javascript code. The [_link to insertContents.js_](insertContents.js)

For this is necesary take the acces at the DOM objects and create them.

```javascript
// This function create a new article.
function newArticle (titleText, shortText, fullText) {
    // Create the elements:
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const short = document.createElement('p');
    const full = document.createElement('p');
    // Insert the content in the elements 
    title.innerText = titleText;
    short.innerHTML = shortText;
    full.innerHTML = fullText;
    // Put the element in the article
    article.appendChild(title);
    article.appendChild(short);
    article.appendChild(full);
    return article;
}
```
 Before this we need create the contents that we pt in the article. Make of this way:

 ```javascript
 function insertContents () {
     // Create the contents.
    const contents = [
        {
            title: "Any things",
            short: "Any things",
            full: "Any things"
        },
        {
            title: "Any things 2",
            short: "Any things 2",
            full: "Any things 2"
        }
    ];
    // Take the access to DOM objects.
    const container = document.querySelector('#contents');
    // Put each object of `contents` in article.
    for (let item of contents) {
        const article = newArticle(item.title, item.short, item.full);
        container.appendChild(article);
    }
}
 ```