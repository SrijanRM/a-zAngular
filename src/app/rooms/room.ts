export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}


export interface RoomList {
    roomNumber?: number;
    roomtype: string;
    price: number;
    checkin: Date;
    checkout: Date;
    amenities: string;
    rating: number;

}