import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }

  logoff() {

    this.router.navigate(['/home'])
    environment.token = '';
    environment.name = '';
    environment.photo = '';
    environment.id = 0;

  }

}
