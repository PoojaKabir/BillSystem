import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencileComponent } from './pencile.component';

describe('PencileComponent', () => {
  let component: PencileComponent;
  let fixture: ComponentFixture<PencileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
