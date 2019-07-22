import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IAlbumPhoto {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}
export interface IUsuario {
  name : string,
  email : string,
  n : number,
  m : number[],
  resultado : boolean,
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  baseUri : string = 'http://localhost:3000/'

  constructor(private httpClient : HttpClient) { }

  getSlidesPhotos() : Observable<IAlbumPhoto[]> {
    return this.httpClient.get<IAlbumPhoto[]>('https://jsonplaceholder.typicode.com/photos');
  }

   getUsuarios() : Observable<IUsuario[]>{
    return this.httpClient.get<IUsuario[]>(this.baseUri + 'api/v1/usuarios');
  }

  createUsuario(usuario : IUsuario) : Observable<IUsuario>{
    return this.httpClient.post<IUsuario>(this.baseUri + 'api/v1/usuarios', usuario);
  }
}
