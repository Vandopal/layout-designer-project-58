const label = document.querySelector('.label')

label.addEventListener('focus', function() {
    if (this.value === 'Ваша электронная почта') {
        this.value = '';
    }
});