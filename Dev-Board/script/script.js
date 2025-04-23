// color btn 
const colorBtn = document.getElementById('colorBtn');
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'yellowgreen', 'purple'];
 let color = 0;
 colorBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = colors[color];
  color = (color + 1) % colors.length;
  
 })
