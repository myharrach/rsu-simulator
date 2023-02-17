import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-type-zone',
  templateUrl: './type-zone.component.html',
  styleUrls: ['./type-zone.component.css']
})
export class TypeZoneComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
