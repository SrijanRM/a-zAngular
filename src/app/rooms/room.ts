export interface Room {
    totalRooms:number;
    availableRooms:number;
    bookedRooms:number;
} 


export interface RoomList{
    roomNumber:number;
    roomType:string;
    price:number;
    checkin:Date;
    checkout:Date;
}