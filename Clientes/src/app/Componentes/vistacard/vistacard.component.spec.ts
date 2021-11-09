import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacardComponent } from './vistacard.component';

describe('VistacardComponent', () => {
  let component: VistacardComponent;
  let fixture: ComponentFixture<VistacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistacardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
