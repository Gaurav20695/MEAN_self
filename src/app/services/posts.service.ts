import { Injectable } from '@angular/core';
import { Post } from '../Posts/post.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPost() {
    this.http.get('http://localhost:3000/api/getpost').subscribe((result: any) => {
      this.posts = result.posts;
      this.postUpdated.next(this.posts);
    });
  }

  addPost(formValue: Post) {
    console.log(formValue);
    this.http.post('http://localhost:3000/api/post', formValue).subscribe((res: any) => {
      this.posts.push(res.post);
      this.postUpdated.next(this.posts);
    }
    );
  }

  deletePost(id: string) {
    console.log(id);
    this.http.delete('http://localhost:3000/api/deletepost/' + id).subscribe(res => {
      let index = this.posts.findIndex(post => post._id === id);
      this.posts.splice(index, 1);
      this.postUpdated.next(this.posts);
    }
    );
  }

  postListener(): Observable<any> {
    return this.postUpdated.asObservable();
  }

}
