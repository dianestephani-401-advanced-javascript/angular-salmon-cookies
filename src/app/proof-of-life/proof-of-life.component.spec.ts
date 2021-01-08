import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofOfLifeComponent } from './proof-of-life.component';

describe('ProofOfLifeComponent', () => {
  let component: ProofOfLifeComponent;
  let fixture: ComponentFixture<ProofOfLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofOfLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
