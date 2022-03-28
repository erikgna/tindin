import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tindin';
  token:string = '';

  constructor(private authService: AuthenticationService){}

  ngOnInit(){
    this.token = this.authService.getToken()
  }
}
