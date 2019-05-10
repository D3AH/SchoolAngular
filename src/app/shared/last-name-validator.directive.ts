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
    const civilStatus = control.get('civilStatus');
    const sex = control.get('sex');

    if (civilStatus && civilStatus.value === 'Soltero' && marriedname.value !== '') {
        return { lastName: true };
    }

    if (sex && marriedname && sex.value === 'Masculino' && (marriedname.value !== '' && marriedname.touched)) {
        return { lastName: true };
    }

    if ((firstSurname && firstSurname.touched && firstSurname.value !== '')
        || (lastSurname && lastSurname.touched && lastSurname.value !== '')
        || (marriedname && marriedname.touched && marriedname.value !== '')) {
            return null;
    }

    return { lastName: true };
};
