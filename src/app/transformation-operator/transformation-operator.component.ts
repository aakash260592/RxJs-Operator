import { Component } from '@angular/core';
import { from, fromEvent, groupBy, map, mapTo, mergeMap, Observable, of, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-transformation-operator',
  templateUrl: './transformation-operator.component.html',
  styleUrls: ['./transformation-operator.component.css']
})
export class TransformationOperatorComponent {
  groupByOperator() {
    const people = [
      { name: 'Shubham', age: 25 },
      { name: 'Shaline', age: 30 },
      { name: 'Omkar', age: 25 },
      { name: 'Rahul Soni', age: 30 },
      { name: 'Rahul Dubey', age: 29 },
      { name: 'Aakash', age: 29 },
    ];
    const source = from(people);
    const example = source.pipe(
      groupBy(person => person.age),
      mergeMap(group => group.pipe(toArray()))
    );

    example.subscribe(group => {
      console.log(`Age: ${group[0].age}`);
      console.log(group);
    });
  }
  mapOperator() {
    const numbers = of(7, 8, 9);

    const doubledNumbers = numbers.pipe(
      map(numbers => numbers * 2)
    );

    doubledNumbers.subscribe(value => console.log(value));
  }
  mapToOperator() {
    const clicks = fromEvent(document, 'click');
    const greetings = clicks.pipe(mapTo('Hi'));
    greetings.subscribe(x => console.log(x));
  }

  pluckOperator() {
    const user = {
      id: 1012841,
      name: 'Aakash Sanap',
      email: 'aakash.sanap@yash.com'
    };
    const userObservable = from([user]);
    const nameObservable = userObservable.pipe(pluck('name'));
    nameObservable.subscribe(name => console.log(name));
  }
}
