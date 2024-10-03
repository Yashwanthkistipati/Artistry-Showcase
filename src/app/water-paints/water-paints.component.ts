import { Component } from '@angular/core';

@Component({
  selector: 'app-water-paints',
  templateUrl: './water-paints.component.html',
  styleUrls: ['./water-paints.component.css']
})
export class WaterPaintsComponent {
  images = [
    { src: 'assets/image7.jpeg', alt: 'Water Paint 1', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image8.jpeg', alt: 'Water Paint 2', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image9.jpeg', alt: 'Water Paint 3', liked: false, likeCount: 0, comment: '', comments: [] }
  ];

  toggleLike(image: any): void {
    if (!image.liked) {
      image.likeCount++;
    } else {
      image.likeCount--;
    }
    image.liked = !image.liked;
  }

  addComment(image: any): void {
    if (image.comment.trim()) {
      image.comments.push(image.comment.trim());
      image.comment = ''; 
    }
  }
}
