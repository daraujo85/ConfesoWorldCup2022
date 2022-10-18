import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });
  errorMessage!: string

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated())
    this.checkIsAuthenticated();
    this.loadScript('./assets/js/login.js');
    this.loadScript('./assets/js/anime.js');
  }

  checkIsAuthenticated() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['grupos']);
    }
  }
  login() {

    let usuario = this.myForm.controls['usuario'].value;
    let senha = this.myForm.controls['senha'].value;

    if (this.authService.login(usuario, senha).subscribe(result => {
      if (result) {
        this.router.navigate(['grupos']);
      }
    }))

      this.errorMessage = "Usuário ou senha incorretos"

  }

  public loadScript(url: string) {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
