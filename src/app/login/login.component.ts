import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { SorteioService } from 'src/services/sorteio.service';

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

  constructor(private router: Router
    , private authService: AuthService
    , private sorteioService: SorteioService) { }

  ngOnInit(): void {
    this.checkIsAuthenticated();
    this.loadScript('./assets/js/anime.js');
    this.loadScript('./assets/js/login.js');

  }
  getSubscribers() {
    // while (!this.sorteioService.end) {


    this.sorteioService.getSubscribers().subscribe(result => {
      debugger
      this.sorteioService.end = result.pageInfo.totalResults < result.pageInfo.resultsPerPage

      this.sorteioService.pageToken = result.nextPageToken ?? result.nextPageToken

      result.items.forEach((data: any) => {

        this.sorteioService.subscribers.push(data.snippet);

      });

    })

    //}

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
