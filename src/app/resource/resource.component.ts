import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  private name: string = "Cookie";
  private amount: number = 5;
  constructor() { }

  ngOnInit() {
  }

  private generate = () => {
    let total: number = +localStorage.getItem("total");
    if (total) {
      total += this.amount;
    } else {
      total = this.amount;
    }
    localStorage.setItem("total", total.toString());
  }
}
