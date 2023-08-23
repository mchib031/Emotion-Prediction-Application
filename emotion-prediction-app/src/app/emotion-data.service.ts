import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmotionDataService {
  private predictedEmotion: string | null = null;
  private predictedEmotionSubject = new BehaviorSubject<string | null>(null);
  private feedback: string | null = null;

  setPredictedEmotion(emotion: string | null) {
    this.predictedEmotion = emotion;
    this.predictedEmotionSubject.next(emotion);
  }

  getPredictedEmotion(): string | null {
    return this.predictedEmotion;
  }

  setFeedback(feedback: string) {
    this.feedback = feedback;
  }

  getFeedback(): string | null {
    return this.feedback;
  }

  predictedEmotion$: Observable<string | null> = this.predictedEmotionSubject.asObservable();
}
