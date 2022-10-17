import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoComponent } from './bolao.component';

describe('BolaoComponent', () => {
  let component: BolaoComponent;
  let fixture: ComponentFixture<BolaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
