import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public totalBook;
  
  constructor(private _service : TotalService) { }

  ngOnInit() 
  {
  }

  addBook()
  {
    this._service.addBook(parseInt(this.totalBook));
  }
}
