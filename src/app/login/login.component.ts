import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    email:string = '';
    password:string = '';

    @Input()
    errorMessage = '';

    constructor(private router: Router, private authService: AuthenticationService){}

    login() {
      if(this.email == '' || this.password == '') this.errorMessage = "Por favor, preencha os campos."

      else this.authService.login(this.email, this.password).subscribe(
        _ => this.router.navigateByUrl('quizzes').then(() => window.location.reload()),
        e => this.errorMessage = "Email ou senha inválidos.",
      )
    }
}
