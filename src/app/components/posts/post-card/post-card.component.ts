import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from "../../../models/post.model";

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  post!: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
