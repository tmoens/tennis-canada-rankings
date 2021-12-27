import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(
    private http: HttpClient,
  )
  { }

  // Load the Open tournament List
  // There is a workbook in google docs which supplies the list of all the Open tournaments in Canada.
  // It has one worksheet per year.
  // This function goes and gets the sheet for a given year as JSON object.
  fetchOpenTournaments(year: number): Observable<any> {
    // By convention, 2013 is the second worksheet, 2014 the third and so on.
    const sheet = year - 2011;
    return this.http.get(
      'https://spreadsheets.google.com/feeds/list/0AnMBHcdDDoB8dHQzcUlaWFExVHBVaDMwYXRWLWtBWGc/' +
      sheet.toString() + '/public/values?alt=json')
      .pipe(
        catchError(this.handleError('fetching open tournaments',null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // * This generic handler was copied from the Angular tutorial.
  // * And as a note to future, even thicker, self who will be going WTF?...
  // * We use it to handle errors for all our http calls.  But all
  // * our HTTP Calls return different types!  And the error handler
  // * has to return the right type.  So, the error handler is
  // * parameterized such that you can tell it what to return when
  // * it is finished doing it's business.
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Operation: ' + operation + ' failed.');
      // Let the app keep running by returning what we were told to.
      return of(result as T);
    };
  }
}
