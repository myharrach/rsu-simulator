import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'


const kmRural = 8.695;



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  constructor(public router: Router) {
  }


  ngOnInit(): void {
  }


}
