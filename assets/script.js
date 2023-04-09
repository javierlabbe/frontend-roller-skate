const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastname');
const celular = document.getElementById('celular');
const correo = document.getElementById('correo');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

const nameValidator = (element) => {
    element.addEventListener('change', () => {
        const inputValue = element.value;
        const testRegex = /^[a-z]+\s?[a-z]?$/gi
        const condicion = testRegex.test(inputValue);
        let style;
        
        if(condicion) {
            style = 'border: solid 2px green';
        } else {
            style = 'border: solid 2px red';
            alert('El campo ingresado contiene caracteres no permitidos.');
        }
        element.setAttribute('style', style)
    })
}

nameValidator(lastNameInput);
nameValidator(nameInput);

celular.addEventListener('change', ()=> {
    const inputValue = celular.value;
    const testRegex = /^(\d)+$/
    const condicion = testRegex.test(inputValue);
    let style;

    if(condicion) {
        style = 'border: solid 2px green';
    } else {
        style = 'border: solid 2px red';
        alert('El número ingresado contiene caracteres no permitidos.')
    }
    celular.setAttribute('style', style)
})

pass2.addEventListener('change', () => {
    const inputValue = pass2.value;
    const condicion = pass1.value === inputValue;
    let style;

    if(condicion) {
        style = 'border: solid 2px green';
    } else {
        style = 'border: solid 2px red';
        alert('Las contraseñas no coinciden.')
    }
    pass2.setAttribute('style', style)
})
