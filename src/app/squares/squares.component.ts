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
    if (this.displayType === 0) return this.post?.title;
    if (this.displayType === 1) return `${this.post?.userId}`;
    return `${this.post?.id}`;
  }

  toggleDisplay() {
    this.displayType = (this.displayType + 1) % 3;
  }
}
