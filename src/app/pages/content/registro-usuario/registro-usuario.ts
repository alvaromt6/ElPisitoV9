import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario-service';
import { Usuario } from '../../../core/models/entities';

@Component({
    selector: 'app-registro-usuario',
    imports: [ReactiveFormsModule],
    templateUrl: './registro-usuario.html',
    styleUrl: './registro-usuario.css',
})
export class RegistroUsuario {

    private _usuarioService: UsuarioService = inject(UsuarioService);
    private _router: Router = inject(Router);

    usuario: Usuario = {
        email: "",
        password: "",
        nombre: ""
    };

    registerForm: FormGroup = new FormGroup({
        elEmail: new FormControl('', [
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$") // REGEX
        ]),
        elPassword: new FormControl('', [
            Validators.required
        ]),
        elUsuario: new FormControl('', [
            Validators.required
        ])
    });

    register(): void {
        if (this.registerForm.valid) {
            this.usuario.email = this.registerForm.get("elEmail")?.value || "";
            this.usuario.password = this.registerForm.get("elPassword")?.value || "";
            this.usuario.nombre = this.registerForm.get("elUsuario")?.value || "";

            this._usuarioService.addUsuario(this.usuario).subscribe({
                next: (datos) => {
                    // Devuelve el objeto usuario creado
                    console.log(datos);
                },
                error: (error) => {
                    // Manejo de error
                },
                complete: () => {
                    // Finalización
                    this._router.navigate(["/auth/login"]);
                }
            });
        }
    }
}
