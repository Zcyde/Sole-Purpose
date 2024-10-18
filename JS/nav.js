document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function() {
      
      document.querySelectorAll('.navbar ul li a').forEach(item => item.classList.remove('active'));
    
      this.classList.add('active');
    });
  });

  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  
  burger.addEventListener('click', () => {
      menu.classList.toggle('active');
  });
  