export interface PackageItem {
  breakfast?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
    ratePerMonth: number;
  };
  canteenId?: any;
  dinner?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
    ratePerMonth: number;
  };
  image?: string;
  lunch?: {
    mainCourse: string[];
    sideCourse: string[];
    specials: string[];
    availableTime: string;
    ratePerDay: number;
  };
  review?: any;
  status?: boolean;
  total?: number;
  category?: string;
  __v?: number;
  _id?: string;
}

export interface CanteenType {
  canteenName?: string;
  email?: string;
  phonenumber?: number;
  city?: string;
  pinCode?: string;
  status?: boolean;
  packageid?: string;
  image?: string;
}

export interface WishType {
  _id?: string;
  userId?: string;
  packageId?: string;
  canteenId?: string;
  source?: string;
  total?: number;
  startDate?: string;
  endDate?: string;
  status?: boolean;
  image?: string;
  totalPerDayRate?: number;
  breakfast?: {
    image: string;
  };
}

export interface categoryType {
  mainCourse?: string[];
  sideCourse?: string[];
  specials?: string[];
  availableTime?: string;
  ratePerDay?: number;
  ratePerMonth?: number;
  canteenName?: string;
  city?: string;
  category?: string;
  image?: string;
  status?: boolean;
  packageId?: string;
}

export interface WishViewType {
  breakfast?: {
    mainCourse?: string[];
    sideCourse?: string[];
    specials?: string[];
    availableTime?: string;
    ratePerDay?: number;
    ratePerMonth?: number;
    category?: string;
    image?: string;
    canteenName?: string;
    packageId?: string;
    city?: string;
  };
  lunch?: {
    mainCourse?: string[];
    sideCourse?: string[];
    specials?: string[];
    availableTime?: string;
    ratePerDay?: number;
    ratePerMonth?: number;
    category?: string;
    image?: string;
    canteenName?: string;
    packageId?: string;
    city?: string;
  };
  dinner?: {
    mainCourse?: string[];
    sideCourse?: string[];
    specials?: string[];
    availableTime?: string;
    ratePerDay?: number;
    ratePerMonth?: number;
    category?: string;
    image?: string;
    canteenName?: string;
    packageId?: string;
    city?: string;
  };
  userId?: string;
  source?: string;
  total?: number;
  status?: boolean;
  canteenId?: string;
  _id?: string;
  totalPerDayRate?: number;
  image?: string;
  category?: string;
  packageId?: string;
}

export interface bookingAddress {
  Building?: string;
  City?: string;
  District?: string;
  Name?: string;
  Phonenumber?: string;
  Pincode?: string;
  Street?: string;
  _id?: string;
}

export interface BookedItem {
  userId?: string;
  packageId?: string;
  canteenId?: string;
  totalDays?: number;
  status?: boolean;
  bookingAmount?: number;
  totalPerDayRate?: number;
  total?: number;
  endDate?: string;
  source?: string;
  booked?: boolean;
  startDate?: string;
  image?: string;
  _id?: string;
  cancelled?: boolean;
  category?: string;
  breakfast?: {
    availableTime?: string;
    canteenName?: string;
    category?: string;
    city?: string;
    image?: string;
    ratePerDay?: number;
    ratePerMonth?: number;
    mainCourse?: string[];
    sideCourse?: string[];
    specials?: string[];
    packageId?: string;
  };
  lunch?: {
    availableTime?: string;
    canteenName?: string;
    category?: string;
    city?: string;
    image?: string;
    ratePerDay?: number;
    ratePerMonth?: number;
    mainCourse?: string[];
    sideCourse?: string[];
    specials?: string[];
    packageId?: string;
  };
  dinner?: {
    availableTime?: string;
    canteenName?: string;
    category?: string;
    city?: string;
    image?: string;
    ratePerDay?: number;
    ratePerMonth?: number;
    mainCourse?: string[];
    sideCourse?: string[];
    specials?: string[];
    packageId?: string;
  };
  bookingAddress?: {
    Building?: string;
    City?: string;
    District?: string;
    Name?: string;
    Phonenumber?: string;
    Pincode?: string;
    Street?: string;
  };
}

export interface storeType {
  canteenInfo?: {
    canteenId?: "";
    canteenName?: "";
    email?: "";
    image?: "";
  };
}

export interface bookingDetails {
  customizedBooking?: number;
  packageBooked?: number;
  totalAmount?: number;
  totalBooking?: number;
}

export interface packageType {
  veg?: number;
  nonveg?: number;
  totalPackages?: number;
}

export interface userType {
  name?: string;
  email?: string;
  userId?: string;
  phonenumber?: number;
  status?: boolean;
  image?: string;
  bookingAddress?: {
    Building?: string;
    City?: string;
    District?: string;
    Name?: string;
    Phonenumber?: string;
    Pincode?: string;
    Street?: string;
  };
}
