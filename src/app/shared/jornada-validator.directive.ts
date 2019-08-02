import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';;


export const JornadaValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const career = control.get('career');
  const grade = control.get('grade');

  const courses = control.get('courses');

  if (career && career.value !== undefined && courses && courses.value !== undefined) {
    console.log(0);
    return { courses: true };
  }

  if (grade && grade.touched && grade.value !== '' && courses && courses.value !== undefined) {
    console.log(1);
    return { courses: true };
  }

  // // if (!(courses && courses.touched && courses.value !== undefined)) {
  // //   console.log(2);
  // //   return { courses: true };
  // // }

  // if ((career && career.touched && career.value !== '')
  //     || (grade && grade.touched && grade.value !== '')
  //     || (courses && courses.touched && courses.value !== undefined)) {
  //       console.log('x')
  //       return null;
  // }

  return null;
};

export class JornadaValidatorDirective {

  constructor() { }

}
