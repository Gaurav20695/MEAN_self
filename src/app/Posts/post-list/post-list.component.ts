import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { Subscription, Subject, Observable } from 'rxjs';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  sub: Subscription;
  loadspinner: boolean = false;

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.PostsService.getPost();
    this.sub = this.PostsService.postListener().subscribe(
      post => {
        this.loadspinner = true;
        this.posts = post;
      }
    )
  }

  onDelete(postDelete: Post) {
    console.log(postDelete);
    this.PostsService.deletePost(postDelete._id);
    this.sub = this.PostsService.postListener().subscribe(
      post => {
        this.loadspinner = true;
        this.posts =
          post;
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }




  //  =[
  //   { header: 'first', content: 'first content' },
  //   { header: 'second', content: 'second content' },
  //   { header: 'third', content: 'third content' }
  // ];

}
