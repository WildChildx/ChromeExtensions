const article = document.querySelector('article');

if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement('p');
    //adding class to the tag
    badge.classList.add('color-secondary-text', 'type--caption');
    badge.textContent = `⏱️ ${readingTime} min read`;
    //accessing heading tag
    const heading = article.querySelector('h1');
    //accessing the date tag
    const date = article.querySelector('time')?.parentNode;
    //placing the badge object after date / heading tag whatever is present in document
    (date ?? heading).insertAdjacentElement('afterend', badge);

}