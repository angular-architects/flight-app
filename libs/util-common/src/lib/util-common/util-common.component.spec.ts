import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilCommonComponent } from './util-common.component';

describe('UtilCommonComponent', () => {
  let component: UtilCommonComponent;
  let fixture: ComponentFixture<UtilCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilCommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UtilCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
