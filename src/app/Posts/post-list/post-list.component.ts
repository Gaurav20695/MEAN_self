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

  constructor(private PostsService: PostsService) { }

  ngOnInit() {

    this.sub = this.PostsService.postListener().subscribe(
      post => {
        this.posts = post;
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
