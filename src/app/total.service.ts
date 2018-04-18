import { Injectable } from '@angular/core';

@Injectable()
export class TotalService {

  constructor() { }
  
  public pen=0;
  public pencile=0;
  public book=0;
  bill:number;

  addBook(book)
  {
    this.book=this.book+book;
  }
  addPen(pen)
  {
    this.pen+=pen;
  }
  addPencil(pencil)
  {
    this.pencile+=pencil;
  }

  getBook()
  {
    return this.book;
  }
  getPen()
  {
    return this.pen;
  }
  getPencil()
  {
    return this.pencile;
  }

  totalBill()
  {
    return ((this.book*30)+(this.pen*7)+(this.pencile*5));
  }

} 
