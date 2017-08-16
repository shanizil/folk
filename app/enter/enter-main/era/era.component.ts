import { Component, OnInit, Input } from '@angular/core';

import { Era } from '../../../model/Era.model';

@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {

  @Input() era : Era;

  constructor() { }

  ngOnInit() {
  }

}
