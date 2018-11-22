import { Component, OnInit } from '@angular/core';

import { KontakService } from '../../app.service';
import { Kontak } from '../../kontak';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private KontakService: KontakService
  ) { }

  ngOnInit() {
      this.getSingleKontak();
  }

  model = new Kontak();
  id = this.route.snapshot.params['id'];
  getSingleKontak(){
    
    this.KontakService
      .getKontak(this.id)
      .subscribe(kontak =>{
          this.model = kontak[0];
          })
  };
  
  updateKontak(){
      this.KontakService
        .updateKontak(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/show']);
  }
}