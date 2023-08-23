import { Component, OnInit } from '@angular/core';
import { EmotionDataService } from '../emotion-data.service';

@Component({
  selector: 'app-emotion-result',
  templateUrl: './emotion-result.component.html',
  styleUrls: ['./emotion-result.component.scss']
})
export class EmotionResultComponent implements OnInit {
  predictedEmotion: string | null = null;

  constructor(private emotionDataService: EmotionDataService) {}

  ngOnInit(): void {
    // Subscribe to changes in predicted emotion
    this.emotionDataService.predictedEmotion$.subscribe(emotion => {
      this.predictedEmotion = emotion;
    });
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
