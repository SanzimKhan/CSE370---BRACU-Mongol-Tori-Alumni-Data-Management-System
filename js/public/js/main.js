document.addEventListener('DOMContentLoaded', () => {
  const alumni = [
    {name: 'A. Rahman', year: 2010, role: 'Engineer'},
    {name: 'S. Khan', year: 2012, role: 'Researcher'},
    {name: 'M. Ahmed', year: 2008, role: 'Professor'}
  ];

  const container = document.getElementById('alumni-container');
  if(container){
    alumni.forEach(a => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `<h4>${a.name}</h4><div class="meta">${a.role} • Class of ${a.year}</div>`;
      container.appendChild(card);
    });
  }

  const menuToggle = document.getElementById('menu-toggle');
  if(menuToggle){
    menuToggle.addEventListener('click', () => alert('Navigation placeholder'));
  }
});
