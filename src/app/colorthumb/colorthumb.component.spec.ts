import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorthumbComponent } from './colorthumb.component';

describe('ColorthumbComponent', () => {
  let component: ColorthumbComponent;
  let fixture: ComponentFixture<ColorthumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorthumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorthumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
