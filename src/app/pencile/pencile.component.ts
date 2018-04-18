import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-pencile',
  templateUrl: './pencile.component.html',
  styleUrls: ['./pencile.component.css']
})
export class PencileComponent implements OnInit {
  public totalPencile;
  constructor(private _service : TotalService) { }

  ngOnInit() {
  }
  addPencil()
  {
    this._service.addPencil(parseInt(this.totalPencile));
  }
}
