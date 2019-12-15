import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OceaniaPage } from './oceania.page';

describe('OceaniaPage', () => {
  let component: OceaniaPage;
  let fixture: ComponentFixture<OceaniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceaniaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OceaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
