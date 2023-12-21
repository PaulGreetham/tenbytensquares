import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { GridComponent } from "./grid/grid.component"; // Import CommonModule

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, GridComponent]
})
export class AppComponent implements OnInit {

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.loadPosts();
  }
}
