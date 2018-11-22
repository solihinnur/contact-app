import { Component, OnInit } from '@angular/core';

import { KontakService } from '../../app.service';
import { Kontak } from '../../kontak';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private KontakService: KontakService,
    private router: Router) { }

  ngOnInit() {
  }

  model = new Kontak();
  addKontak(){
      this.KontakService
        .addKontak(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
