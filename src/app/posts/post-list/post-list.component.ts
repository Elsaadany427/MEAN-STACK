import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { postType } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy{
  // posts = [
  //   {title: 'First Post', content: 'This is the first post'},
  //   {title: 'Second Post', content: 'This is the second post'},
  //   {title: 'Third Post', content: 'This is the third post'},
  // ];
  Posts:postType[] = [];
  private postSub!: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.Posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUptadedListener()
      .subscribe(
        (posts: postType[]) => {
          this.Posts = posts;
        }
      );
  }
  ngOnDestroy(): void {
      this.postSub.unsubscribe();
  }

}
