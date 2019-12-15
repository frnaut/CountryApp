import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinesePage } from './chinese.page';

describe('ChinesePage', () => {
  let component: ChinesePage;
  let fixture: ComponentFixture<ChinesePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinesePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinesePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
