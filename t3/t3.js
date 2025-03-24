const target = document.getElementById('target');

const p = document.createElement('p');
p.innerHTML = 'Browser and OS info: ' + navigator.userAgent;
target.appendChild(p);

let w = screen.width;
let h = screen.height;
const p2 = document.createElement('p');
p2.innerHTML = 'Width: ' + w + ', height: ' + h;
target.appendChild(p2);

let aw = screen.availWidth;
let ah = screen.availHeight;
const p3 = document.createElement('p');
p3.innerHTML = 'Available width: ' + aw + ', available height: ' + ah;
target.appendChild(p3);

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};
const finnishDate = new Date().toLocaleDateString('fi-FI', options);
const p4 = document.createElement('p');
p4.innerHTML = 'Current date and time: ' + finnishDate;
target.appendChild(p4);
