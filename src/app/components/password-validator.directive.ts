import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidatePassword]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordValidator), multi: true }
  ]
})
export class PasswordValidator implements Validator {

  private regex = new RegExp('^(((?=.*[a-z])(?=.{2,}[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.{2,}[A-Z])))(?=.*[!@#\$%\^&\*])(?=.{8,})');

  constructor(@Attribute('appValidatePassword') public validatePassword) { }

  validate(c: AbstractControl): { [key: string]: any } {
    const value = c.value;
    if (!this.regex.test(value)) {
      return {
        validatePassword: this.regex.test(value)
      };
    }
    return null;
  }

}
