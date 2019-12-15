import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpanishPage } from './spanish.page';

describe('SpanishPage', () => {
  let component: SpanishPage;
  let fixture: ComponentFixture<SpanishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpanishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
