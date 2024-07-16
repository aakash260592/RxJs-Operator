import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-error-handling-operator',
  templateUrl: './error-handling-operator.component.html',
  styleUrls: ['./error-handling-operator.component.css']
})
export class ErrorHandlingOperatorComponent {
  catchErrorOperator(){
    const fetchData = new Observable(subscriber => {
      if (0.4 > 0.5) {
        subscriber.next({ data: 'API response' });
        subscriber.complete();
      } else {
        subscriber.error('API error!');
      }
    });
    
    const handleError = () => {
      return of('Failed to load data. Please try again later.');
    };
    
    const withErrorHandling = fetchData.pipe(
      catchError(handleError)
    );
    
    withErrorHandling.subscribe(
      value => console.log('Received:', value),
      error => console.error('Error:', error)
    );
  }
}
