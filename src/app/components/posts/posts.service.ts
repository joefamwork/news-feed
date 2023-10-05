import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from "../../models/post.model";

@Injectable()
export class PostsService {

  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.postsUrl);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.postsUrl}/${id}`);
  }

}
