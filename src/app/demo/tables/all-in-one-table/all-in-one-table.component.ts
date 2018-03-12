import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {routeAnimation} from '../../../core/common/route.animation';
import {ListColumn} from '../../../core/list/list-column.model';
import {ListDatabase} from '../../../core/list/list-database';
import {ListDataSource} from '../../../core/list/list-datasource';
import {List} from '../../../core/list/list.interface';
import {ALL_IN_ONE_TABLE_DEMO_DATA} from './all-in-one-table.demo';
import {CustomerCreateUpdateComponent} from './customer-create-update/customer-create-update.component';
import {Customer} from './customer-create-update/customer.model';

@Component({
  selector: 'vr-all-in-one-table',
  templateUrl: './all-in-one-table.component.html',
  styleUrls: ['./all-in-one-table.component.scss'],
  animations: [routeAnimation],
  host: { '[@routeAnimation]': 'true' }
})
export class AllInOneTableComponent implements List<Customer>, OnInit, OnDestroy {

  subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
  data$: Observable<Customer[]>;
  customers: Customer[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Name', property: 'name', visible: true, isModelProperty: true },
    { name: 'First Name', property: 'firstName', visible: false, isModelProperty: true },
    { name: 'Last Name', property: 'lastName', visible: false, isModelProperty: true },
    { name: 'Street', property: 'street', visible: true, isModelProperty: true },
    { name: 'Zipcode', property: 'zipcode', visible: true, isModelProperty: true },
    { name: 'City', property: 'city', visible: true, isModelProperty: true },
    { name: 'Phone', property: 'phoneNumber', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  resultsLength: number;
  dataSource: ListDataSource<Customer> | null;
  database: ListDatabase<Customer>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.customers = ALL_IN_ONE_TABLE_DEMO_DATA.map(customer => new Customer(customer));

    this.subject$.next(this.customers);
    this.data$ = this.subject$.asObservable();

    this.database = new ListDatabase<Customer>();
    this.data$
      .filter(Boolean)
      .subscribe((customers) => {
        this.customers = customers;
        this.database.dataChange.next(customers);
        this.resultsLength = customers.length;
      });

    this.dataSource = new ListDataSource<Customer>(this.database, this.sort, this.paginator, this.columns);
  }

  createCustomer() {
    this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((customer: Customer) => {
      if (customer) {
        this.customers.unshift(new Customer(customer));
        this.subject$.next(this.customers);
      }
    });
  }

  updateCustomer(customer) {
    this.dialog.open(CustomerCreateUpdateComponent, {
      data: customer
    }).afterClosed().subscribe((customer) => {
      if (customer) {
        const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id);
        this.customers[index] = new Customer(customer);
        this.subject$.next(this.customers);
      }
    });
  }

  deleteCustomer(customer) {
    this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
    this.subject$.next(this.customers);
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.filter = value;
  }

  ngOnDestroy() {
  }
}
