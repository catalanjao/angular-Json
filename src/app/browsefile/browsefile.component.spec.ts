import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsefileComponent } from './browsefile.component';

describe('BrowsefileComponent', () => {
  let component: BrowsefileComponent;
  let fixture: ComponentFixture<BrowsefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
