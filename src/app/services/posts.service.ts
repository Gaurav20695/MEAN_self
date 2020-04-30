import { Injectable } from '@angular/core';
import { Post } from '../Posts/post.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postUpdated = new Subject<Post[]>();

  constructor() { }

  addPost(formValue: Post) {
    console.log(formValue);
    this.posts.push(formValue);
    console.log(this.posts);
    this.postUpdated.next(this.posts);
  }
  postListener(): Observable<any> {
    return this.postUpdated.asObservable();
  }

}
