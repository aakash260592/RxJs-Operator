import { Component } from '@angular/core';
import { distinct, filter, interval, of, skip } from 'rxjs';

@Component({
  selector: 'app-filtering-operator',
  templateUrl: './filtering-operator.component.html',
  styleUrls: ['./filtering-operator.component.css']
})
export class FilteringOperatorComponent {
  distinctOperator() {
    const numbers = of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1);
    numbers.pipe(distinct())
      .subscribe(x => console.log(x));
  }

  filterOperator() {
    const numbers = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    numbers.pipe(
      filter(numbers=>numbers%2===0)
    ).subscribe(value=>console.log(value));
  }

  skipOperator(){
    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const result=source.pipe(skip(2));
    result.subscribe(value=>console.log(value));
  }
}

