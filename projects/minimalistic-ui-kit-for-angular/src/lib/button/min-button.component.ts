import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'button[min-button]',
  exportAs: 'matButton',
  templateUrl: './min-button.component.html',
  styleUrls: ['./min-button.component.css'],
})
export class MinButton implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
