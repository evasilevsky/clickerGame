import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  private total: number;
  constructor() { }

  ngOnInit() {
    this.total = +localStorage.getItem("total");
  }

}
