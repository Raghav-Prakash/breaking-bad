import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less'],
})
export class CharactersComponent implements OnInit {

  ngOnInit() {
    console.log('init characters comp')
  }
}
