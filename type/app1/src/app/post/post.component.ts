import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts: IPost[]=[];

  constructor(private dataservice:DataService) { 

  }

  ngOnInit(): void {
    this.dataservice.getPosts().subscribe(data=> this.posts =data)
  }

}
