import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppliedComponent } from './view-applied.component';

describe('ViewAppliedComponent', () => {
  let component: ViewAppliedComponent;
  let fixture: ComponentFixture<ViewAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
