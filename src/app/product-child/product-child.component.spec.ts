import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChildComponent } from './product-child.component';

describe('ProductChildComponent', () => {
  let component: ProductChildComponent;
  let fixture: ComponentFixture<ProductChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
