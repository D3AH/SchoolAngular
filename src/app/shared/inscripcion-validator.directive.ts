import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';;


export const InscripcionValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const academicUnity = control.get('academicUnity');
  const daytime = control.get('daytime');

  const career = control.get('career');

  if(academicUnity && academicUnity.value === 'a' && daytime && daytime.value !== ''){
      console.log(0);
      return { career: true}
  }

  return null;
};

export class InscripcionValidatorDirective {

  constructor() { }

}
