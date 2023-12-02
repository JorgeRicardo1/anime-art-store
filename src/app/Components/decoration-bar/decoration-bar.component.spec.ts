import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationBarComponent } from './decoration-bar.component';

describe('DecorationBarComponent', () => {
  let component: DecorationBarComponent;
  let fixture: ComponentFixture<DecorationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecorationBarComponent]
    });
    fixture = TestBed.createComponent(DecorationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
