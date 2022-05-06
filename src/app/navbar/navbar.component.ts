import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  image: string = "../../assets/bleach-kuchiki-rukia-wallpaper-preview.jpg";

  ngOnInit(): void {

   

  }

}
