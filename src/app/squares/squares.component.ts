import { Component, Input } from '@angular/core';
import { Posts } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquareComponent {
  @Input() post!: Posts;
  displayType = 0;

  get displayText(): string {
    switch (this.displayType) {
      case 0: return this.post?.title;
      case 1: return `${this.post?.userId}`;
      case 2: return `${this.post?.id}`;
      case 3: return `${this.post?.body}`;
      default: return '';
    }
  }

  toggleDisplay() {
    this.displayType = (this.displayType + 1) % 4; // Cycle through 0, 1, 2, and 3
  }
}
