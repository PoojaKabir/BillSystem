import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {

  
  constructor(private _service : TotalService) { }

  ngOnInit() 
  {
  }

  public book = this._service.getBook();
  public pen = this._service.getPen();
  public pencil = this._service.getPencil();
  public total = this._service.totalBill();

}
