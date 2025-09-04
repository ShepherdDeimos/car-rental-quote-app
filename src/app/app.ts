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
  customerAge = signal(18);
  phoneNumber = signal('');

  formatphoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return '(' + cleaned.slice(0, 3) + ') ' + cleaned.slice(3, 6) + '-' + cleaned.slice(6);
    } else if (cleaned.length === 7) {
      return cleaned.slice(0, 3) + '-' + cleaned.slice(3);
    } else {
      return phone;
    }
  };

  // Rental Dates
  pickupDate = signal(new Date);
  dropOffDate = signal(new Date);
  pickupTime = signal('10:00 AM');
  dropoffTime = signal('10:00 AM');

  // Car Details




  
}
