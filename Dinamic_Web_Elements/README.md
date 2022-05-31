# **Documentation**

In this folder have a example of a web with dinamic components. The html code has made by the javascript code.

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
