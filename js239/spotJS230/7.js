function buildList(strings) {
  const ul = document.createElement('UL');
  strings.forEach(string => {
    const li = document.createElement('LI');
    li.textContent = string;
    ul.appendChild(li);
  })

  document.body.append(ul);
}