import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    param = { value: 'world' };
    translate: TranslateService;

    constructor(translate: TranslateService) {
        this.translate = translate;
        this.translate.setDefaultLang('en');
    }

    changeLanguage(lang: string) {
        this.translate.use(lang);
    }
}
