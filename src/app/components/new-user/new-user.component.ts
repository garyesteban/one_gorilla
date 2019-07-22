import { Component, OnInit } from '@angular/core';
import { IUsuario, HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent implements OnInit {

  name : string = '';
  email: string = '';
  n : number = null;
  m : string = null;
  resultado : boolean = false;
  respuestaUsuario : string;

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit() {
  }

  onSubmit() {
    const m : number[] = this.m.split(',').map((item : string) => {
      return parseInt(item);
    });
    m.map((number : number , indexa : number, array : number[]) => {
      array.map((value : number, indexb : number) => {
        if (indexa != indexb && number + value == this.n) {
          this.resultado = true;
        }
      });
    });
    const usuario : IUsuario = {
      email : this.email,
      name : this.name,
      m : m,
      n : this.n,
      resultado : this.resultado
    }
    this.httpClientService.createUsuario(usuario)
      .subscribe((usuario : IUsuario) => {
        this.name = '';
        this.email = '';
        this.n = null;
        this.m = null;
        this.resultado = false;
        this.respuestaUsuario = usuario.resultado ? 'verdadero' : 'falso';
      });
  }
}
