// chnaging color functionality
let color = 0;
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'yellowgreen', 'purple'];
const colorBtn = document.getElementById('colorBtn').addEventListener('click', function () {
  document.body.style.backgroundColor = colors[color];
  color = (color + 1) % colors.length;
});

//  discoverClick/blog section
document.getElementById('discoverClick').addEventListener('click', function () {
  window.location.href = './discover.html';
});

//live date and time
function updateTimes() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById('staticDate').textContent = formatted;
}
updateTimes();

setInterval(updateTimes, 1000);
// 6 button
let taskCount = 6;
let completedCount = 23;

const taskCountEl = document.getElementById('taskCount');
const completedCountEl = document.getElementById('completedCount');
const logContainer = document.getElementById('logContainer');

const buttons = document.getElementsByClassName('complete-btn');
const totalButtons = buttons.length;

for (let i = 0; i < totalButtons; i++) {
  const button = buttons[i];

  button.addEventListener('click', function () {
    const taskName = button.getAttribute('data-task');

    //get alert when click on complete button
    alert('Board updated successfully');

    if (i === totalButtons - 1) {
      alert('Congrats!!! You Have completed All the current tasks');
    }

    if (taskCount > 0) {
      taskCount--;
    }
    completedCount++;

    if (taskCount < 10) {
      taskCountEl.textContent = '0' + taskCount;
    } else {
      taskCountEl.textContent = taskCount;
    }

    completedCountEl.textContent = completedCount;

    // Add activity title in sidebar
    const log = document.createElement('p');
    const now = new Date().toLocaleTimeString();
    log.textContent = `You have completed the task "${taskName}" at ${now}`;
    log.style.backgroundColor = '#eff6ff';
    log.style.marginTop = '8px';
    log.style.padding = '12px';
    log.style.fontSize = '12px';
    log.style.borderRadius = '8px';

    logContainer.appendChild(log);

    // after done all operation then disable button
    button.disabled = true;
    button.style.opacity = '0.2';
    button.style.backgroundColor = 'green';
  });
}

// finally Clear History
document.getElementById('clearHistory').addEventListener('click', function () {
  logContainer.innerHTML = '';
});
