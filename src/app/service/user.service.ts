import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../model/user';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}/users`

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<User[]>(this.url);
  }
  insert(user:User) {
    return this.http.post(this.url, user);
  }
}
