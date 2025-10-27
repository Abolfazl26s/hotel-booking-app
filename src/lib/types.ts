// user
export interface User {
  id: string;
  name: string;
  email: string;
  avatorUrl?: string;
}

// uitils
export interface Amenity {
  name: string;
  icon: string;
}

// Room
export interface Room {
  id: string;
  hotelId: string;
  pricePerNight: number;
  maxGuests: number;
  amenities: string[];
  imageUrl: string;
}

// Hotel
export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  priceStartFrom: number;
  imageUrl: string;
  images: string[];
  description: string;
  facilities: Amenity[];
  rooms: Room[];
}

// reservation
export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  roomId: string;
  checkIn: string; // ISO date string
  checkOut: string; // ISO date string
  guestName: string;
  gusetEmail: string;
  specialRequest?: string;
  totalPrice: number;
  status: "confirmed" | "cancelled" | "completed";
}
