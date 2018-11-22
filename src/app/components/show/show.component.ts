import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KontakService } from '../../app.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private KontakService: KontakService,
    private router: Router
  ) { }
  kontak:any;
  ngOnInit() {
    this.getKontaks();
  }
  getKontaks(){
     this.KontakService
        .getKontaks()
        .subscribe(kontak => {this.kontak = kontak;} )
  }
  deleteKontak(id){
      this.KontakService
        .deleteKontak(id)
        .subscribe(() => {this.getKontaks();
      })
  }
}