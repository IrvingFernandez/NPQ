import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //arreglo de videos
  videos = [
    {
      video: 'GYFJjwXtsU4'
    }
    
  ];

  constructor() { }

  ngOnInit(): void {

    //Código para poder mostrar videos de youtube
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
