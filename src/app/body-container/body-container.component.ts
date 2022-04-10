import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css'],
})
export class BodyContainerComponent implements OnInit {
  rating: number[];
  isActive;
  userRating: number;
  isHighlighted: boolean;
  innerRatingText: string;
  emojiIcon: string;

  clickButtonHandler($event: any) {
    this.userRating = Number($event.target.id);
    this.isHighlighted = !this.isHighlighted;
    if (this.isHighlighted) {
      $event.target.id = $event.target.classList.add('isHighlighted');
    } else {
      $event.target.classList.remove('isHighlighted');
    }
  }
  onSubmit() {
    this.isActive = !this.isActive;
    switch (this.userRating) {
      case 1:
        console.log('1 - weak rating');
        this.innerRatingText = '1 - weak rating';
        this.emojiIcon = '😭';

        break;
      case 2:
        console.log('2 - average rating');
        this.innerRatingText = '2 - average rating';
        this.emojiIcon = '😖';
        break;
      case 3:
        console.log('3 - good rating');
        this.innerRatingText = '3 - good rating';
        this.emojiIcon = '😀';
        break;
      case 4:
        console.log('4 - very good rating');
        this.innerRatingText = '4 - very good rating';
        this.emojiIcon = '😁';
        break;
      case 5:
        console.log('5 - excellent rating');
        this.innerRatingText = '5 - excellent rating';
        this.emojiIcon = '🎉';
        break;

      default:
        console.log('no rating');
        this.innerRatingText = 'no rating';
    }
  }
  constructor() {
    this.rating = [1, 2, 3, 4, 5];
    this.isActive = false;
    this.userRating = 0;
    this.isHighlighted = false;
    this.innerRatingText = '';
    this.emojiIcon = '😀';
  }

  ngOnInit(): void {}
}
