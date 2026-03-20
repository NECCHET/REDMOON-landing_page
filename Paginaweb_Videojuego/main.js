document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del Menú Toggle
    const btnMain = document.getElementById('btn-main');
    const menu = document.getElementById('menu-opciones');
    const btnReturn = document.getElementById('btn-return');

    function toggleMenu() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
            btnMain.style.display = 'none';
        } else {
            menu.style.display = 'none';
            btnMain.style.display = 'inline-block';
        }
    }

    // Asignamos los eventos de clic a los botones
    if (btnMain) btnMain.addEventListener('click', toggleMenu);
    if (btnReturn) btnReturn.addEventListener('click', toggleMenu);

    // 2. Lógica del Formulario de Contacto (Simulación)
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página recargue
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Estado de "Enviado"
            btn.textContent = '¡SEÑAL ENVIADA!';
            btn.style.backgroundColor = '#2e7d32'; // Verde estilo pixel
            
            // Regresa al estado original después de 3 segundos
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = 'var(--pixel-red)';
                this.reset(); // Limpia los campos del formulario
            }, 3000);
        });
    }
});