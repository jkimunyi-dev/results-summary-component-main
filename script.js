
document.addEventListener('DOMContentLoaded', () => {
    const continueBtn = document.querySelector('.continue-btn');
    
    continueBtn.addEventListener('click', () => {
        
        continueBtn.classList.add('clicked');
        
        console.log('Continue button clicked!');
        
        setTimeout(() => {
            continueBtn.classList.remove('clicked');
        }, 300);
    });
});