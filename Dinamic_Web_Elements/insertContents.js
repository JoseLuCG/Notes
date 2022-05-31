function newArticle (titleText, shortText, fullText) {
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const short = document.createElement('p');
    const full = document.createElement('p');
    title.innerText = titleText;
    short.innerHTML = shortText;
    full.innerHTML = fullText;
    article.appendChild(title);
    article.appendChild(short);
    article.appendChild(full);
    return article;
}

function insertContents () {
    const contents = [
        {
            title: "Gran final despues del inicio",
            short: "Finalmente terminó, a pesar de todo.",
            full: "Los espectadores presenciaron el trancursos desde principio a fin. -Parecía que no terminaría nunca, pero al final terminó. Expresaron muchos de los testigos de los acontecimientos."
        },
        {
            title: "Como te digo una cosa, te digo la otra",
            short: "Afirma que es así, y no hay nada más que hablar.",
            full: "En su última comparecencia ha señalado la importancia de que no señalar 'esas cosas que no vienen a cuento' y dejar de andarse con andrómenas."
        }
    ];
    const container = document.querySelector('#contents');
    for (let item of contents) {
        const article = newArticle(item.title, item.short, item.full);
        container.appendChild(article);
    }
}

window.addEventListener("load", insertContents);