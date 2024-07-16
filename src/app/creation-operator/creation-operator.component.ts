import { Component } from '@angular/core';
import { concatMap, defer, fromEvent, generate, interval, of, range, take, timer } from 'rxjs';

@Component({
  selector: 'app-creation-operator',
  templateUrl: './creation-operator.component.html',
  styleUrls: ['./creation-operator.component.css']
})
export class CreationOperatorComponent {


  intervalOperator() {
    const numbers = interval(1000);
    const takeFourNumber = numbers.pipe(take(5));
    takeFourNumber.subscribe(x => console.log(x));
  }

  rangeOperator() {
    const numbers = range(1, 10);
    numbers.subscribe({
      next: value => {
        console.log(value);
      },
      complete: () => console.log('complete!')
    })
  }

  genrateOperator() {
    const result = generate(1, x => x <= 10, x => x + 1, x => x);
    result.subscribe(
      x => console.log(x)
    );

  }
  deferOperator() {
    const random$ = of(Math.random());
    random$.subscribe(x => console.log("before Defer  : " + x));
    random$.subscribe(x => console.log("before Defer  : " + x));
    random$.subscribe(x => console.log("before Defer  : " + x));

    const clicksOrInterval = defer(() => of(Math.random()));

    clicksOrInterval.subscribe(x => console.log("After Defer  : " + x));
    clicksOrInterval.subscribe(x => console.log("After Defer  : " + x));
    clicksOrInterval.subscribe(x => console.log("After Defer  : " + x));
  }

  timerOperator() {
    const source = of(1, 2, 3);
    timer(1000,3000)
      .pipe(concatMap(() => source))
      .subscribe(console.log);
  }
}
