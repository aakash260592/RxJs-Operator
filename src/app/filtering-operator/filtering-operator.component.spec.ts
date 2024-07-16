import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringOperatorComponent } from './filtering-operator.component';

describe('FilteringOperatorComponent', () => {
  let component: FilteringOperatorComponent;
  let fixture: ComponentFixture<FilteringOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
