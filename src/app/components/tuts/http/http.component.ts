import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit, OnDestroy {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  data: User[] = null;
  sub: Subscription[] = [];

  // with async pipe
  users$: Observable<User[]> = null;
  counter$: Observable<number> = null;

  constructor(private httpService: HttpClient) {
    this.users$ = this.httpService.get<User[]>(this.url);

    this.counter$ = interval(2000).pipe(tap((data) => console.log(data)));
  }

  ngOnInit(): void {
    // console.log('init');
    // this.sub.push(
    //   this.httpService
    //     .get<User[]>(this.url)
    //     .subscribe((data) => (this.data = data))
    // );
    // const random = Math.random();
    // this.sub.push(
    //   interval(2000).subscribe(() => {
    //     console.log(random);
    //   })
    // );
  }

  ngOnDestroy() {
    // console.log('destroy');
    // this.sub.forEach((sub) => sub.unsubscribe());
  }
}
