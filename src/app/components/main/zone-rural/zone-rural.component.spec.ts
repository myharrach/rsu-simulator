import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneRuralComponent } from './zone-rural.component';

describe('ZoneRuralComponent', () => {
  let component: ZoneRuralComponent;
  let fixture: ComponentFixture<ZoneRuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneRuralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneRuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
