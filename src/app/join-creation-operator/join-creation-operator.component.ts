import { Component } from '@angular/core';
import { of, partition } from 'rxjs';

@Component({
  selector: 'app-join-creation-operator',
  templateUrl: './join-creation-operator.component.html',
  styleUrls: ['./join-creation-operator.component.css']
})
export class JoinCreationOperatorComponent {


  partitionOperator() {
    const observableValues = of(1, 2, 3, 4, 5, 6, 7, 8, 9,10);
    const [evens$, odds$] = partition(observableValues, value => value % 2 === 0);

    odds$.subscribe(x => console.log('odds', x));
    evens$.subscribe(x => console.log('evens', x));
  }


}
