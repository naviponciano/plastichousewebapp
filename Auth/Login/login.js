    
    function desvanecerYRedirigir() {
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = '../../index.html';
        }); // 500ms debe coincidir con el tiempo de transición
      }
    