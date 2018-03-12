import { Observable } from 'rxjs/Observable';
import { ListColumn } from './list-column.model';
import { ListDatabase } from './list-database';
import { ListDataSource } from './list-datasource';

export interface List<T> {
  data$: Observable<T[]>;
  columns: ListColumn[];
  pageSize: number;
  resultsLength: number;
  dataSource: ListDataSource<T> | null;
  database: ListDatabase<T>;

  onFilterChange(value): void;
}
