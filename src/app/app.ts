import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RentalQuote } from './models/rental-quote';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('car-rental-quote-app');

  // Customer Information

  customerName = signal('');
  customerAge = signal(0);
}
//hi 