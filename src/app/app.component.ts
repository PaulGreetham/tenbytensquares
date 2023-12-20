import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService, Posts } from './data.service';
import { GridComponent } from './grid/grid.component';
import { SquaresComponent } from './squares/squares.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GridComponent,
    SquaresComponent,
  ],
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
