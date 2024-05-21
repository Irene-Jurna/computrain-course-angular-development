import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpatchesComponent } from './colorpatches.component';

describe('ColorpatchesComponent', () => {
  let component: ColorpatchesComponent;
  let fixture: ComponentFixture<ColorpatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorpatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorpatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
