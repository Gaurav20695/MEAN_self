import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
  }

  onSubmit<Post>(form: NgForm) {
    this.PostsService.addPost(form.form.value);

  }

}
