import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  readonly URL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  async get(): Promise<ITodo[]>{
    return await this.http.get<ITodo[]>(this.URL).toPromise();
  }
}
