import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface Posts {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSubject = new BehaviorSubject<Posts[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) { }

  loadPosts() {
    this.http.get<Posts[]>(this.apiUrl).pipe(
      tap(posts => this.postsSubject.next(posts))
    ).subscribe();
  }
}
