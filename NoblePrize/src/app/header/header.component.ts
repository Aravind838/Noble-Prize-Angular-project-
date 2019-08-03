import { Component, OnInit } from '@angular/core';


import { TimelineMax, Linear } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHidden = true;

  constructor() { }

  ngOnInit() {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    const navButtons = document.querySelectorAll(".nav-button");


    let tl = new TimelineMax();
    tl.from(header, 1, {y: "-200"})
      .from(logo, 0.3, {y: -200,opacity: 0})
      .staggerFrom(navButtons, 0.3, {opacity: 0}, 0.1)
  }
}
