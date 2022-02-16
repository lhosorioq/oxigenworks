import { Component } from '@angular/core';
// import { NavbarComponent } from './general/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'oxygenworks';
  // langs: string[] = [];

  constructor( private translate: TranslateService ) {
  //   this.translate.setDefaultLang('es');
  //   this.translate.use('es');
  //   this.translate.addLangs(["es", "en"]);
  //   this.langs = translate.getLangs();
  //   console.log(this.translate.langs);
  //   translate.get(this.langs)
  //     .subscribe( lan => lan );
    // console.log(this.cambiarIdiomaGeneral);

  }

  // changeLang(lang: string) {
  //   this.translate.use(lang);
  // }

  changeLang( ln:string ) {
    this.translate.use(ln);
    this.translate.use(ln);
    console.log(`Agregar ${ ln }`);
  }

}
