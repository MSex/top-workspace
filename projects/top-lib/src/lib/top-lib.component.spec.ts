import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLibComponent } from './top-lib.component';

describe('TopLibComponent', () => {
  let component: TopLibComponent;
  let fixture: ComponentFixture<TopLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
