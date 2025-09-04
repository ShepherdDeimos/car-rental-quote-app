export interface RentalQuote {
  id: string;
  customerName: string;
  customerAge: number;
  phoneNumber?: string;
  

  rentalDates: {
    pickupDate: Date;
    dropOffDate: Date;
    pickupTime: string;
    dropoffTime: string;
  };


  carDetails: { 
    category: string;         // "Economy", "SUV", "Luxury"
    make: string;             // "Toyota", "BMW", "Honda"
    model: string;            // "Camry", "X5", "Accord"
    transmission: string;     // "Automatic", "Manual"
  };


  locations: {
    pickupLocation: string;   // "Lax Airport", "Downtown LA"
    dropoffLocation: string;  // "Lax Airport", "San Diego Airport"
    oneWay: boolean;          // true if different locations / not oneway
  };


  pricing: {
    basePrice: number;         // Base rental price
    taxes: number;             // Taxes applied to the rental
    fees: number;              // Additional fees (e.g., insurance, GPS)
    totalPrice: number;         // Total price after taxes and fees
  };

  extras: {
    gps: boolean;              // true if GPS is included
    childSeat: boolean;        // true if child seat is included
    additionalDriver: boolean; // true if additional driver is included
    insuranceCoverage: boolean; // true if insurance coverage is included
    unlimitedMileage: boolean;  // true if unlimited mileage is included
  };

  quoteStatus: {
    isBooked: boolean;      // true if the quote has been booked
    createdAt: Date;        // Date when the quote was created
    expiresAt: Date;        // Date when the quote expires
    lastModified: Date;     // Date when the quote was last modified
  };
}
