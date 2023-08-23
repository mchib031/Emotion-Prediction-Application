import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emotion-prediction-app';
  predictedEmotion: string = '';
  updatePredictedEmotion(emotion: string) {
    this.predictedEmotion = emotion;
  }
}
