import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmotionDataService } from '../emotion-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emotion-response',
  templateUrl: './emotion-response.component.html',
  styleUrls: ['./emotion-response.component.scss']
})
export class EmotionResponseComponent implements OnInit, OnDestroy {
  predictedEmotion: string | null = null;
  randomJoke: string | null = null;
  randomMotivationQuote: string | null = null;
  private subscription: Subscription;

  constructor(private emotionDataService: EmotionDataService) {
    this.subscription = this.emotionDataService.predictedEmotion$.subscribe(emotion => {
      this.predictedEmotion = emotion;
      this.updateContentBasedOnEmotion();
    });
  }

  ngOnInit(): void {
    this.updateContentBasedOnEmotion();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateContentBasedOnEmotion(): void {
    switch (this.predictedEmotion) {
      case 'sadness':
        this.randomJoke = this.getRandomJoke();
        this.randomMotivationQuote = null;
        break;
      case 'joy':
        this.randomJoke = null;
        this.randomMotivationQuote = "The only way to do great work is to love what you do.";
        break;
      case 'fear':
        this.randomJoke = null;
        this.randomMotivationQuote = this.getRandomMotivationQuote();
        break;
      case 'love':
        this.randomJoke = null;
        this.randomMotivationQuote = "Love yourself first and everything else falls into line.";
        break;
      default:
        this.randomJoke = null;
        this.randomMotivationQuote = null;
        break;
    }
  }

  private getRandomJoke(): string {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "I'm reading a book on anti-gravity. It's impossible to put down!"
    ];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  private getRandomMotivationQuote(): string {
    const quotes = [
      "Fake it until you make it.",
      "Your limitation is only your imagination.",
      "Don't be scared, don't let your dreams be dreams."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
