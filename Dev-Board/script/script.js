// color btn
let color = 0;
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'yellowgreen', 'purple'];
const colorBtn = document.getElementById('colorBtn').addEventListener('click', function () {
  document.body.style.backgroundColor = colors[color];
  color = (color + 1) % colors.length;
});;


//  discoverClick part
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

// completed 6 btn
let taskCount = 6;
let completedCount = 23;

const taskCountEl = document.getElementById('taskCount');
const completedCountEl = document.getElementById('completedCount');
const logContainer = document.getElementById('logContainer');

document.querySelectorAll('.complete-btn').forEach(function (button, click, buttons) {
  button.addEventListener('click', function () {
    const taskName = button.getAttribute('data-task');

    if (confirm('Board updated successfully')) {
      if (click === buttons.length - 1) {
        alert('Congrats!!! You Have completed All the current tasks');
      }
      //Update count
      taskCount = Math.max(0, taskCount - 1);
      completedCount++;

      taskCountEl.textContent = taskCount.toString().padStart(2, '0');
      completedCountEl.textContent = completedCount;

      //log with time
      const log = document.createElement('p');
      const now = new Date().toLocaleTimeString();
      log.textContent = `You have completed the task "${taskName}" at ${now}`;
      log.style.backgroundColor = '#eff6ff';
      log.style.marginTop = '8px';
      log.style.padding = '12px';
      log.style.fontSize = '12px';
      log.style.borderRadius = '8px';

      logContainer.appendChild(log);

      // 3.Disable button
      button.disabled = true;
      button.style.opacity = 0.2;
      button.style.backgroundColor = 'green';
    }
  });
});

// Clear History
document.getElementById('clearHistory').addEventListener('click', function () {
  logContainer.innerHTML = '';
});

