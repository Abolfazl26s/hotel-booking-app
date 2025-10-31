import create from "zustand";
import { Hotel, Room } from "@/lib/types";

interface BookingFlowState {
  hotel: Hotel | null;
  room: Room | null;
  dates: { checkIn: Date; checkOut: Date } | null;
  setBookingData: (data: {
    hotel: Hotel;
    room: Room;
    dates: { checkIn: Date; checkOut: Date };
  }) => void;
  clearBookingData: () => void;
}

export const useBookingFlowStore = create<BookingFlowState>((set) => ({
  hotel: null,
  room: null,
  dates: null,
  setBookingData: (data) =>
    set({
      hotel: data.hotel,
      room: data.room,
      dates: data.dates,
    }),
  clearBookingData: () =>
    set({
      hotel: null,
      room: null,
      dates: null,
    }),
}));    