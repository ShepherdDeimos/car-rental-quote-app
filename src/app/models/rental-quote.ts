export interface RentalQuote {
  id: string;
  customerName: string;
  customerAge: number;
  phoneNumber?: string;
  carType: string;
  


  rentalDates: {
    pickupDate: Date;
    dropOffDate: Date;
    pickupTime: string;
    dropoffTime: string;
  };
}
