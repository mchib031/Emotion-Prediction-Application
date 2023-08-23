import { Component } from '@angular/core';
import { EmotionDataService } from '../emotion-data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbackType: 'thumbs-up' | 'thumbs-down' = 'thumbs-up';
  selectedEmotion: string = '';
  emotionOptions: string[] = ['joy', 'sadness', 'anger', 'fear', 'love', 'surprise'];
  submittedFeedback: boolean = false;

  constructor(private emotionDataService: EmotionDataService) {}

  submitFeedback() {
    if (this.feedbackType === 'thumbs-up') {
      this.emotionDataService.setFeedback(this.feedbackType);
    } else if (this.feedbackType === 'thumbs-down') {
      this.emotionDataService.setFeedback(this.selectedEmotion);
    }
    this.submittedFeedback = true;
  }
}
