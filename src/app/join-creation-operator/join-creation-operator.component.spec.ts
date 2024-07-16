import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCreationOperatorComponent } from './join-creation-operator.component';

describe('JoinCreationOperatorComponent', () => {
  let component: JoinCreationOperatorComponent;
  let fixture: ComponentFixture<JoinCreationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCreationOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinCreationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
