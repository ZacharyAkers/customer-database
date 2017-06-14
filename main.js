// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here;
  function user(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('user');
  const url = 'https://randomuser.me/api/?results=12';

  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      let authors = data.results;
      return authors.map(function(author) {
        let li = user('li'),
            img = user('img'),
            span = user('span');
        img.src = author.picture.medium;
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
        console.log(data);
      })
    })

})();