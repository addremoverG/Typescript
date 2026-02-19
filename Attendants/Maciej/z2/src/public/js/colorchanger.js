document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.js-color-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            
            if (this.style.backgroundColor === 'green') {
                this.style.backgroundColor = 'blue';
            } else {
                this.style.backgroundColor = 'green';
            }
            
            this.style.color = 'white'; 
        });
    });
});