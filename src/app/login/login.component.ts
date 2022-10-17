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
    usuario: new FormControl('',[Validators.required]),
    senha: new FormControl('',[Validators.required]),
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
   
  }

  login() {

    let usuario = this.myForm.controls['usuario'].value;
    let senha = this.myForm.controls['senha'].value;

    if (this.authService.login(usuario, senha)) {
      this.router.navigate(['grupos']);
    }

  }

}
