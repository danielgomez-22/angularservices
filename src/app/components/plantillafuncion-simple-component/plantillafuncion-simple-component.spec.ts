import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillafuncionSimpleComponent } from './plantillafuncion-simple-component';

describe('PlantillafuncionSimpleComponent', () => {
  let component: PlantillafuncionSimpleComponent;
  let fixture: ComponentFixture<PlantillafuncionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncionSimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionSimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
