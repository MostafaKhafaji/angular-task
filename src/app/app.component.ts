import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div [attr.dir]="dir">
      <div class="d-flex justify-content-end p-3 bg-light border-bottom">
        <select class="form-select w-auto" (change)="changeLang($event)">
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  dir: string = 'ltr';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLang(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
    this.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.documentElement.setAttribute('dir', this.dir);
    document.documentElement.setAttribute('lang', lang);
  }
}
