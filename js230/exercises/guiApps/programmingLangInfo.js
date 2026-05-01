const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
                 'general-purpose programming language. It was designed and developed in the mid-1990s ' +
                 'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
                 'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
                 'including functional, object-oriented, and imperative. It also has a dynamic type ' +
                 'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
                 'programming language. It has been standardized in the ECMAScript language ' +
                 'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
                 'technologies of World Wide Web content production; the majority of websites employ ' +
                 'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
                 'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
                 'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
                 'with a long history and a distinctive, fully parenthesized prefix notation. ' +
                 'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
                 'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
                 'since its early days, and many dialects have existed over its history. Today, the best ' +
                 'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },
];

function getLanguageData(name) {
  return languages.find(data => data.name === name);
}

document.addEventListener('DOMContentLoaded', e => {
  const article = document.createElement('article');
  document.body.appendChild(article);

  languages.forEach(language => {
    const dl = document.createElement('dl');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    const showMore = document.createElement('a');
    dt.textContent = language.name;
    dd.dataset.name = language.name;
    dd.textContent = language.description.slice(0, 120) + '...';
    showMore.href = '#';
    showMore.dataset.name = language.name;
    showMore.textContent = 'Show more';
    article.appendChild(dl);
    dl.appendChild(dt);
    dl.appendChild(dd);
    dl.appendChild(showMore);
  });

  article.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const data = getLanguageData(e.target.dataset.name);
      const description = document.querySelector(`dd[data-name="${e.target.dataset.name}"]`);

      if (e.target.textContent === 'Show more') {
        description.textContent = data.description;
        e.target.textContent = 'Show less';
      } else {
        description.textContent = data.description.slice(0, 120) + '...';
        e.target.textContent = 'Show more';
      }
    }
  });
});