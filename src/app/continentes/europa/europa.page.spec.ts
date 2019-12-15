import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EuropaPage } from './europa.page';

describe('EuropaPage', () => {
  let component: EuropaPage;
  let fixture: ComponentFixture<EuropaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EuropaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
