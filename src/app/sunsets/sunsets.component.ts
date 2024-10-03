import { Component } from '@angular/core';

@Component({
  selector: 'app-sunsets',
  templateUrl: './sunsets.component.html',
  styleUrls: ['./sunsets.component.css']
})
export class SunsetsComponent {
  sunsets = [
    { src: 'assets/image1.jpeg', alt: 'Sunset 1', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image2.jpeg', alt: 'Sunset 2', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image3.jpeg', alt: 'Sunset 3', liked: false, likeCount: 0, comment: '', comments: [] },
  
  ];

  toggleLike(sunset: any): void {
    if (!sunset.liked) {
      sunset.likeCount++;
    } else {
      sunset.likeCount--;
    }
    sunset.liked = !sunset.liked;
  }

  addComment(sunset: any): void {
    if (sunset.comment.trim()) {
      sunset.comments.push(sunset.comment.trim());
      sunset.comment = ''; 
    }
  }
}
