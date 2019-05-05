import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

/**
 * Valida que haya por lo menos un apellido en el form  persona.
 *  * Primero apellido
 *  * Segundo apellido
 *  * Apellido de casada
 */
export const lastNameValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const firstSurname = control.get('firstSurname');
    const lastSurname = control.get('lastSurname');
    const marriedname = control.get('marriedname');

    

    if ((firstSurname && firstSurname.touched && firstSurname.value !== '')
        || (lastSurname && lastSurname.touched && lastSurname.value !== '')
        || (marriedname && marriedname.touched && marriedname.value !== '')) {
            console.log('1');
            return null;
    }
    console.log('2');
    return { 'lastName': true };
}
