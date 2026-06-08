const templates = {
  photo({ id, src, caption }) {
    return (
      `<figure data-id="${id}">
         <img src="${src}" />
         <figcaption>${caption}</figcaption>
       </figure>`
    );
  },

  photos(photosArray) {
    return photosArray.map(photo => this.photo(photo)).join('');
  },

  photoInformation({ title, created_at, id, likes, favorites }) {
    return (`
    <h2>${title}</h2>
    <p><time>Taken on ${created_at}</time></p>
    <div class="actions">
      <a href="/photos/like" data-id="${id}" data-property="likes" class="button like">
        ♡ ${likes ? likes : 0} Likes
      </a>
      <a href="/photos/favorite" data-id="${id}" data-property="favorites" class="button favorite">
        ☆ ${favorites ? favorites : 0} Favorites
      </a>
    </div>
    `);
  },

  comment({ gravatar, name, date, body }) {
    return (`
      <li>
        <article>
          <figure>
            <img src="${gravatar}" />
          </figure>
          <header>
            <h1>${name}</h1>
            <p><small><time>Posted ${date}</time></small></p>
          </header>
          <p>${body}</p>
        </article>
      </li>
      `);
  },

  comments(commentsArray) {
    return commentsArray.map(comment => this.comment(comment)).join('');
  },
};

export default templates;