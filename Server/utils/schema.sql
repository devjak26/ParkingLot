CREATE TABLE Users (
  user_id uuid PRIMARY KEY,
  name varchar,
  mobile_num bigint,
  email varchar UNIQUE,
  role varchar, 
  pass varchar
);

CREATE TABLE ParkingLot (
  parking_id uuid PRIMARY KEY,
  name varchar,
  location varchar,
  zip_code bigint,
  mobile_num bigint,
  small_price bigint,
  med_price bigint,
  large_price bigint
);

CREATE TABLE Floor (
  floor_id uuid PRIMARY KEY,
  parking_id uuid REFERENCES ParkingLot(parking_id),
  floor_num bigint,
  num_of_floors bigint
);

CREATE TABLE Parking_slot (
  parking_slot_id uuid PRIMARY KEY,
  floor_id uuid REFERENCES Floor(floor_id),
  parking_slot_num bigint,
  type varchar
);

CREATE TABLE Ticket (
  ticket_id uuid PRIMARY KEY,
  parking_id uuid REFERENCES ParkingLot(parking_id),
  user_id uuid REFERENCES Users(user_id),
  ticket varchar,
  parking_slot_id uuid REFERENCES Parking_slot(parking_slot_id),
  veh_type varchar,
  st_timestamp timestamp,
  end_timestamp timestamp
);
