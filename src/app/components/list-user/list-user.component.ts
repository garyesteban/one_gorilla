import { Component, OnInit } from '@angular/core';
import { HttpClientService, IUsuario } from '../../services/http-client.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  usuarios : IUsuario[];

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getUsuarios()
      .subscribe((usuarios : IUsuario[]) => {
        this.usuarios = usuarios
      });
  }

}
