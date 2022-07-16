import { Component } from '@angular/core';
import { RifugioService } from './services/rifugio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  public rifugi: any[] = [];
  public rifugio: any;
  
  public modalStatus: boolean = false;

  public myObj = {
    id: 100,
    name: 'My new Obj',
  };

  constructor(public rifugioService: RifugioService) {}

  ngOnInit(): void {
    this.rifugioService.getAllRifugio().subscribe((data: any) => this.rifugi = data);
  }

  visualizzaRifugio(rifugio: any) {
    this.rifugio = rifugio;
    this.modalStatus = true;
  }

  closeModal() {
    this.modalStatus = false;
  }

  getRifugioById() {
    this.rifugioService.getRifugioById(1).subscribe((data) => console.log(data));
  }
}
