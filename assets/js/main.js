// Site JavaScript
console.log('Merul Badda Talks site loaded');

document.addEventListener('DOMContentLoaded', () => {
  const cal = document.getElementById('upcoming-calendar');
  if (cal) {
    const dateStr = cal.dataset.date;
    const date = new Date(dateStr);
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let html = '<table class="calendar-table"><tr>';
    days.forEach(d => { html += `<th>${d}</th>`; });
    html += '</tr><tr>';
    for(let i=0; i<firstDay; i++) html += '<td></td>';
    for(let day=1; day<=daysInMonth; day++) {
      const classes = day === date.getDate() ? 'event-day' : '';
      html += `<td class="${classes}">${day}</td>`;
      if((firstDay + day) % 7 === 0 && day !== daysInMonth) html += '</tr><tr>';
    }
    html += '</tr></table>';
    cal.innerHTML = html;
  }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  }
});
