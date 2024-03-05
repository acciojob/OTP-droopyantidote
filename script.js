document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach(function(input, index) {
        input.addEventListener('input', function() {
            if (this.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && index > 0 && this.value.length === 0) {
                inputs[index - 1].focus();
            }
        });
    });
});
