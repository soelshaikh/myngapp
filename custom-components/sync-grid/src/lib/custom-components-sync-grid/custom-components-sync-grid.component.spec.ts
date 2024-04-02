import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomComponentsSyncGridComponent } from './custom-components-sync-grid.component';

describe('CustomComponentsSyncGridComponent', () => {
  let component: CustomComponentsSyncGridComponent;
  let fixture: ComponentFixture<CustomComponentsSyncGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComponentsSyncGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomComponentsSyncGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
