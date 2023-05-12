import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortyService {

  private url = 'https://rickandmortyapi.com/api/character';
   
  constructor(private httpClient: HttpClient) { }
  
  getCharacterList(){
    return this.httpClient.get(this.url);
  }
  getCharacterDetail(id: any){
    return this.httpClient.get(`${this.url}/${id}`);
  }
}
