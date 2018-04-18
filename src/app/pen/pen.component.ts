import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {
  public totalPen;
  constructor(private _service : TotalService) { }

  ngOnInit() {
  }
  addPen()
  { 
    this._service.addPen(parseInt(this.totalPen));
  }
}
