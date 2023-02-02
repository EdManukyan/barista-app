import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaShopComponent } from './barista-shop.component';

describe('BaristaShopComponent', () => {
  let component: BaristaShopComponent;
  let fixture: ComponentFixture<BaristaShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaristaShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaristaShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
