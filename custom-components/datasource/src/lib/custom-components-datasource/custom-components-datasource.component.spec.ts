import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomComponentsDatasourceComponent } from './custom-components-datasource.component';

describe('CustomComponentsDatasourceComponent', () => {
  let component: CustomComponentsDatasourceComponent;
  let fixture: ComponentFixture<CustomComponentsDatasourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComponentsDatasourceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomComponentsDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
