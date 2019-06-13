import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  postsUI: Post[] = [];
  postSub: Subscription;


  constructor(private postServ: PostsService) {}

  ngOnInit() {
    this.postsUI = this.postServ.getPosts();
    this.postSub = this.postServ.getPostUpdateListener().subscribe(
      (posts: Post[]) => {
        this.postsUI = posts;
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.postSub.unsubscribe;

  }

}
