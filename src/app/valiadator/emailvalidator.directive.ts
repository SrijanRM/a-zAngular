import { invalid } from '@angular/compiler/src/render3/view/util';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true }]
})
export class EmailvalidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidEmail: true
      }
    }
    return null;
  }
  
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
