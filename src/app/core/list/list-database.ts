import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/** An example database that the data source uses to retrieve data for the table. */
export class ListDatabase<T> {

  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor() {
  }

  get data(): T[] {
    return this.dataChange.value;
  }
}
