import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';
import { ComunicacionService } from '../../../core/services/comunicacion-service';
import { Credenciales } from '../../../core/models/dtos';

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule,RouterLink],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login {

    private _authService: AuthService = inject(AuthService);
    private _router: Router = inject(Router);
    private _comunicacionService: ComunicacionService = inject(ComunicacionService);

    credenciales: Credenciales = {
        username: "",
        password: "",
    };

    loginForm: FormGroup = new FormGroup({
        // elEmail: new FormControl('', [
        //     Validators.required,
        //     Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$") // REGEX
        // ]),
        elUsuario: new FormControl('', [Validators.required]),
        elPassword: new FormControl('', [Validators.required])
    });

    login(): void {
        if (this.loginForm.valid) {
            this.credenciales.username = this.loginForm.get("elEmail")?.value || "";
            this.credenciales.password = this.loginForm.get("elPassword")?.value || "";
        }

        this._authService.login(this.credenciales).subscribe({
            next: (response) => {
                this._authService.setTokenInLocalStorage(response.jwt);
                this._comunicacionService.cambioLogin(true);

            },
            error: (error) => {

                //Error al hacer login
            },
            complete: () => {
                this._router.navigate(['/']);
            }
        });
    }
}
