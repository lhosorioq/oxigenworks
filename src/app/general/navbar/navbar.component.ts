import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  langs: string[] = [];
  @Output()
  cambiarIdiomaGeneral: EventEmitter<string> = new EventEmitter();

  constructor( private translate: TranslateService ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(["es", "en"]);
    this.langs = translate.getLangs();
    // console.log(this.translate.langs);
    translate.get(this.langs)
      .subscribe( lan => lan);
  }

  changeLang(lang: string) {
    console.log(lang);
  }

  agregar(lang: string){
    // console.log('algo debe hacer aca');
    this.translate.use(lang);
    this.cambiarIdiomaGeneral.emit( lang );
  }


}
