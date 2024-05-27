import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpatchesObservablesComponent } from './colorpatches-observables.component';

describe('ColorpatchesObservablesComponent', () => {
  let component: ColorpatchesObservablesComponent;
  let fixture: ComponentFixture<ColorpatchesObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorpatchesObservablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorpatchesObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
