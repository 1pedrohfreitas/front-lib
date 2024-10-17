import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedrohfreitasFrontLibComponent } from './pedrohfreitas-front-lib.component';

describe('PedrohfreitasFrontLibComponent', () => {
  let component: PedrohfreitasFrontLibComponent;
  let fixture: ComponentFixture<PedrohfreitasFrontLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedrohfreitasFrontLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedrohfreitasFrontLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
