import { Component } from '@angular/core';

@Component({
  selector: 'app-portraits',
  templateUrl: './portraits.component.html',
  styleUrls: ['./portraits.component.css']
})
export class PortraitsComponent {
  portraits = [
    { src: 'assets/image4.jpg', alt: 'Portrait 1', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image5.jpg', alt: 'Portrait 2', liked: false, likeCount: 0, comment: '', comments: [] },
    { src: 'assets/image6.jpg', alt: 'Portrait 3', liked: false, likeCount: 0, comment: '', comments: [] }
  ];

  toggleLike(portrait: any): void {
    if (!portrait.liked) {
      portrait.likeCount++;
    } else {
      portrait.likeCount--;
    }
    portrait.liked = !portrait.liked;
  }

  addComment(portrait: any): void {
    if (portrait.comment.trim()) {
      portrait.comments.push(portrait.comment.trim());
      portrait.comment = ''; 
    }
  }
}