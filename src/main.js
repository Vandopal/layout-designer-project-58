const label = document.querySelector('.label')

document.querySelector('.label').addEventListener('focus', function() {
    if (this.value === 'Ваша электронная почта') {
        this.value = '';
    }
});