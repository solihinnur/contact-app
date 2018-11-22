import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KontakService } from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id: string;
  constructor(private router: Router,public KontakService: KontakService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
  }

  logout(): void {
    this.KontakService.logout();
    this.router.navigate(['/login']);
  }

}
