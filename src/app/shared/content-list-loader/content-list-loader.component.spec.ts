import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListLoaderComponent } from './content-list-loader.component';

describe('ContentListLoaderComponent', () => {
  let component: ContentListLoaderComponent;
  let fixture: ComponentFixture<ContentListLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentListLoaderComponent]
    });
    fixture = TestBed.createComponent(ContentListLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
