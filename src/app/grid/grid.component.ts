import { Component, Input } from '@angular/core';
import { SquareComponent } from '../squares/squares.component';
import { Posts } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() posts: Posts[] = [];

  getAnimationDelay(index: number): string {
    return `${0.025 * index}s`;
  }
}
