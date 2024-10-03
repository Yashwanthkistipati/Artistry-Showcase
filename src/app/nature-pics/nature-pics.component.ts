import { Component } from '@angular/core';

@Component({
  selector: 'app-nature-pics',
  templateUrl: './nature-pics.component.html',
  styleUrls: ['./nature-pics.component.css']
})
export class NaturePicsComponent {
  images = [
    { src: 'assets/image10.jpg', alt: 'Nature Pic 1', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image11.jpg', alt: 'Nature Pic 2', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image12.jpg', alt: 'Nature Pic 3', liked: false, likeCount: 0, comment: '', comments: [] }
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
