import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstoreComponent } from './mstore.component';

describe('MstoreComponent', () => {
  let component: MstoreComponent;
  let fixture: ComponentFixture<MstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
