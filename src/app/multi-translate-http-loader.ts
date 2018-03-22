/**
 * 2018-02-27 Ted Moens
 * Under AngularJS, we used angular-translate which had the ability to load
 * translation files on demand.  Under Angular2+ we have to use ngx-translate
 * which does not.  In fact, the defacto-loader requires all translations for
 * a given language to be in a single file.
 *
 * This class is borrowed from here:
 * https://gist.github.com/BorisWechselberger/08e2424e1267ed27f9b4a046cc3357c8
 * and at least allows one to load multiple files, even if they cannot be loaded
 * on demand.
 *
 * We are using this because we want to be able to port our translations files
 * without major rework.
 */
import {HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';


export class MultiTranslateHttpLoader implements TranslateLoader {

  constructor(private http: HttpClient,
              public resources: { prefix: string, suffix: string }[] = [{
                prefix: '/assets/i18n/',
                suffix: '.json'
              }]) {}

  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): any {

    return Observable.forkJoin(this.resources.map(config => {
      return this.http.get(`${config.prefix}${lang}${config.suffix}`);
    })).map(response => {
      return response.reduce((a, b) => {
        return Object.assign(a, b);
      });
    });
  }
}
