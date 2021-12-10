import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { postType } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: postType[] = [];
  private postUptaded = new Subject<postType[]>();
  constructor() { }

  getPosts(){
    return [...this.posts];
  }
  getPostUptadedListener(){
    return this.postUptaded.asObservable();
  }
  addPost(post: postType){
    const newPost: postType = {title: post.title, content: post.content};
    this.posts.push(newPost);
    this.postUptaded.next([...this.posts]);
  }
}
