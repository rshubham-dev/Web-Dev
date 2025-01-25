let isOpen = false;
          function toggleMenu() {
            isOpen = !isOpen;
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
      
            if (isOpen) {
              hamburger.classList.add('open');
              navMenu.classList.add('open');
            } else {
              hamburger.classList.remove('open');
              navMenu.classList.remove('open');
            }
          }