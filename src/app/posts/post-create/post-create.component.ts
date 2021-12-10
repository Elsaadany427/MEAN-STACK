import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { postType } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(postForm: NgForm): void {
    if(postForm.invalid)
      return;
    const post:postType = {title: postForm.value.title, content: postForm.value.content};
    this.postService.addPost(post);
    postForm.resetForm();
  }
  getErrorMessage(title:any){
    if (title.hasError('required')) {
      return 'You must enter a value';
    }
    return title.hasError('minlength') ? 'Length must be min 3 numbers' : '';
  }

}
