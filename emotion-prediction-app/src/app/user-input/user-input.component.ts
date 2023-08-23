import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmotionDataService} from "../emotion-data.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
})
export class UserInputComponent {
  textInput: string = '';

  constructor(
    private http: HttpClient,
    private emotionDataService: EmotionDataService
  ) {}


  predictEmotion() {
    this.http
      .post<{ emotion: string }>('http://localhost:5000/predict_emotion', { sentence: this.textInput })
      .subscribe((response:any) => {
        this.emotionDataService.setPredictedEmotion(response.predicted_emotion);
      });
  }
}
