import { Component } from '@angular/core';
import { delay, Observable, range } from 'rxjs';

@Component({
  selector: 'app-utility-operator',
  templateUrl: './utility-operator.component.html',
  styleUrls: ['./utility-operator.component.css']
})
export class UtilityOperatorComponent {
  delayOperator(){
    const greetings = new Observable(subscriber => {
      subscriber.next('Hello!');
      subscriber.next('How are you?');
      subscriber.next('Welcome!');
      subscriber.complete();
    });
    const delayedGreetings = greetings.pipe(
      delay(2000)
    );

    delayedGreetings.subscribe(value => console.log(value));
  }

  delayOperatorNew(){
    const source=range(1,5);
    const delayedSource=source.pipe(delay(2000));
    console.log("subscriber",new Date());
    delayedSource.subscribe((value=>console.log(value)));

  }
}
