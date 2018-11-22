import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { KontakService } from '../../app.service';
import { Kontak } from '../../kontak';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private KontakService: KontakService
  ) { }

  kontak=[];
  ngOnInit() {
      this.getSingleKontak();
  }

  nama = this.route.snapshot.params['nama'];
  getSingleKontak(){
    
    this.KontakService
      .getSearch(this.nama)
      .subscribe(kontak =>{
          this.kontak = kontak;
          })
  };

}
