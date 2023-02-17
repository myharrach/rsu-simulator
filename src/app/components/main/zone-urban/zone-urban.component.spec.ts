import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneUrbanComponent } from './zone-urban.component';

describe('ZoneUrbanComponent', () => {
  let component: ZoneUrbanComponent;
  let fixture: ComponentFixture<ZoneUrbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneUrbanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneUrbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
