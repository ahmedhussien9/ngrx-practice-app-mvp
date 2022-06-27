import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { HttpAuthService } from 'src/app/services/auth.service';
import { AuthActions } from 'src/app/store/actions/auth-action.types';
import { login } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _httpAuthService: HttpAuthService,
    private store$: Store<any>,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void { }

  submit() {
    // this._httpAuthService.login(this.userForm.value.username, this.userForm.value.password).pipe(
    //   tap((token) => {
    //     this.store$.dispatch(AuthActions.login({ user: { username: this.userForm.value.username, ...token } }));
    //     this.router.navigateByUrl("/products");
    //   })
    // ).subscribe(
    //   noop,
    //   () => alert("Login failed")
    // )
    this.store$.dispatch(login({ user: { username: this.userForm.value.username, password: this.userForm.value.password } }))
  }

}
