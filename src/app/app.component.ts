import { Component, OnInit } from '@angular/core';
import { DataService, Posts } from './data.service';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Posts[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
