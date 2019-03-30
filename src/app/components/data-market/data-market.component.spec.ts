import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMarketComponent } from './data-market.component';

describe('DataMarketComponent', () => {
  let component: DataMarketComponent;
  let fixture: ComponentFixture<DataMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
