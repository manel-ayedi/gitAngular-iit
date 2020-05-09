import {Directive, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {UsersService} from '../../core/services/user/user.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appUsernameExist]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useClass: UsernameExistDirective, multi: true}]
})
export class UsernameExistDirective implements AsyncValidator {

  constructor(private userService: UsersService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.value) {
      of(null);
    }
    console.log(control.pristine, control.touched, control.dirty)
    if (control.pristine) {
      of(null);
    }
    return this.userService.usernameExist(control.value).pipe(
      map(b => {
        if (b) {
          return {usernameExist: true};
        }
        return null;
      })
    );
  }

}
