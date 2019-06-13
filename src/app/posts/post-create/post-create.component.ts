import { Component, OnInit } from '@angular/core';
import { PostsService } from './../posts.service';
import { NgForm } from '@angular/forms';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  newPost = 'NO CONTENT';


  constructor(private postServ: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (!form.invalid){
      console.log('added');
      this.postServ.addPost(form.value.title, form.value.content);
      form.resetForm();
    }
  }

}
