import { ComponentFixture, TestBed } from '@angular/core/testing';
import { McDesignComponent } from './mc-design.component';

describe('McDesignComponent', () => {
  let component: McDesignComponent;
  let fixture: ComponentFixture<McDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [McDesignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(McDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
