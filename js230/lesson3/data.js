/*
when a link is clicked
  prevent default

get 'currently visible element', get the clicked element


- if the visible article shares a data key w/ clicked, do nothing
- otherwise, hide it by changing 'visiblity' attribute → 'hidden'
- check all links for currently visible element, return element

HELPER getVisible:
given each article, find the visible article
*/

document.addEventListener('DOMContentLoaded', (e) => {
  function getClickedBlockValue(link) {
    return link.dataset.block;
  }

  function getVisibleArticle(articles) {
    for (let i = 0; i < articles.length; i++) {
      const articleElement = articles[i];
      if (articleElement.style.visibility === 'visible') return articleElement;
    }
  }
  
  const links = document.querySelector('ul');

  links.addEventListener('click', (e) => {
    const articlesList = [...document.querySelectorAll('article')];
    const visibleArticle = getVisibleArticle(articlesList);

    if (e.target.tagName === 'A') {
      e.preventDefault();
      const blockValue = getClickedBlockValue(e.target);
      if (blockValue !== visibleArticle.dataset.block) {
        visibleArticle.style.visibility = 'hidden';
        articlesList.forEach(article => {
          if (article.dataset.block === blockValue) {
            article.style.visibility = 'visible';
          }
        })
      }
    }
  })
})