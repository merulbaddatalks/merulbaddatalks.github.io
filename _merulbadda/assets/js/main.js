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

  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  fetch('/talks.json')
    .then(r => r.json())
    .then(talks => {
      const now = new Date();
      talks.sort((a, b) => new Date(a.date) - new Date(b.date));
      const upcoming = [];
      const past = [];
      talks.forEach(t => {
        const endOfDay = new Date(t.date + 'T23:59:59');
        if (endOfDay >= now) {
          upcoming.push(t);
        } else {
          past.push(t);
        }
      });
      past.reverse();

      const upcomingList = document.querySelector('.upcoming-list');
      if (upcomingList) {
        upcomingList.innerHTML = '';
        upcoming.forEach(t => {
          const li = document.createElement('li');
          const dateStr = new Date(t.date).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'2-digit' });
          let html = `${dateStr} - <a href="${t.url}">${t.title}</a>`;
          if (t.time) html += ` (Time: ${t.time})`;
          if (t.room) {
            html += ' (Room: ';
            html += t.room_url ? `<a href="${t.room_url}">${t.room}</a>` : t.room;
            html += ')';
          }
          if (t.rsvp) html += ` <a href="${t.rsvp}">RSVP</a>`;
          li.innerHTML = html;
          upcomingList.appendChild(li);
        });
        if (upcoming.length === 0) {
          const p = document.createElement('p');
          p.textContent = 'No upcoming talks scheduled.';
          upcomingList.parentNode.insertBefore(p, upcomingList);
          upcomingList.remove();
        }
      }

      const pastBody = document.querySelector('.previous-talks-table tbody');
      if (pastBody) {
        pastBody.innerHTML = '';
        past.forEach(t => {
          const tr = document.createElement('tr');
          const dateShort = new Date(t.date).toISOString().slice(0,10);
          tr.innerHTML = `
            <td data-label="Date">${dateShort}</td>
            <td data-label="Title"><a href="${t.url}">${t.title}</a></td>
            <td data-label="Speaker">${t.speaker}</td>
            <td data-label="Affiliation">${t.affiliation || ''}</td>
            <td data-label="Recording">${t.youtube_url ? `<a href="${t.youtube_url}">Video</a>` : 'N/A'}</td>
            <td data-label="Slides">${t.slides_url ? `<a href="${t.slides_url}">Slides</a>` : 'N/A'}</td>`;
          pastBody.appendChild(tr);
        });
      }

      const pastCards = document.querySelector('.previous-talks-cards');
      if (pastCards) {
        pastCards.innerHTML = '';
        past.forEach(t => {
          const div = document.createElement('div');
          div.className = 'talk-card';
          const dateStr = new Date(t.date).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'2-digit' });
          const links = [];
          if (t.youtube_url) links.push(`<a href="${t.youtube_url}">Video</a>`);
          if (t.slides_url) links.push(`<a href="${t.slides_url}">Slides</a>`);
          div.innerHTML = `
            <div class="talk-date">${dateStr}</div>
            <div class="talk-title"><a href="${t.url}">${t.title}</a></div>
            <div class="talk-speaker">${t.speaker}</div>
            ${t.affiliation ? `<div class="talk-affiliation">${t.affiliation}</div>` : ''}
            <div class="talk-links">${links.join(' | ')}</div>`;
          pastCards.appendChild(div);
        });
      }
    })
    .catch(err => console.error('Error loading talks', err));
});
