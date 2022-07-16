import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RifugioService {
  constructor(public http: HttpClient) {}

  /* GET-ALL */
  getAllRifugio() {
    return this.http.get('http://localhost:3000/rifugio');
  }

  /* GET-ONE (BY ID) */
  getRifugioById(id: number) {
    return this.http.get(`http://localhost:3000/rifugio/${id}`);
  }
}
