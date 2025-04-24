// color btn
const colorBtn = document.getElementById('colorBtn');
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'yellowgreen', 'purple'];
let color = 0;
colorBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = colors[color];
  color = (color + 1) % colors.length;
});

//  discoverClick part
document.getElementById('discoverClick').addEventListener('click', function () {
  window.location.href = './discover.html';
});

// completed btn
let taskCount = 6;
let completedCount = 23;

const taskCountEl = document.getElementById('taskCount');
const completedCountEl = document.getElementById('completedCount');
const logContainer = document.getElementById('logContainer');

document.querySelectorAll('.complete-btn').forEach(function (button, index, buttons) {
  button.addEventListener('click', function () {
    const taskName = button.getAttribute('data-task');

    if (confirm('Board updated successfully')) {
      if (index === buttons.length - 1) {
        alert('Congrats!!! You have completed all the current tasks');
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
      log.style.padding = '10px';
      log.style.marginTop = '8px';
      log.style.borderRadius = '8px';
      log.style.fontSize = '14px';

      logContainer.appendChild(log);

      // 3.Disable button
      button.disabled = true;
      button.style.opacity = 0.2;
      button.style.backgroundColor = 'green';
    }
  });
});


