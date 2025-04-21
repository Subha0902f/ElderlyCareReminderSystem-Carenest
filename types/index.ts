export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'elderly' | 'caregiver';
  birthdate?: string;
  emergencyContact?: string;
  medicalInfo?: {
    allergies: string[];
    conditions: string[];
    bloodType?: string;
    doctorInfo?: {
      name: string;
      phone: string;
    };
  };
  caregivers?: string[]; // Array of caregiver IDs for elderly users
  elderly?: string[]; // Array of elderly IDs for caregivers
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  schedule: {
    time: string;
    days: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[];
  }[];
  instructions?: string;
  startDate: string;
  endDate?: string;
  refillDate?: string;
  elderlyId: string;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  location?: string;
  notes?: string;
  doctorName?: string;
  elderlyId: string;
}

export interface Reminder {
  id: string;
  type: 'medication' | 'appointment' | 'hydration' | 'custom';
  title: string;
  description?: string;
  time: string;
  recurring: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly' | 'custom';
  customFrequency?: string;
  elderlyId: string;
  relatedItemId?: string; // Can be medicationId or appointmentId
  completed: boolean;
  completedTime?: string;
  notified: boolean;
  notificationId?: string; // ID of the scheduled notification
}

export interface CheckIn {
  id: string;
  elderlyId: string;
  timestamp: string;
  moodRating: 1 | 2 | 3 | 4 | 5;
  notes?: string;
  painLevel?: 1 | 2 | 3 | 4 | 5;
  symptoms?: string[];
  medications?: {
    medicationId: string;
    taken: boolean;
    time?: string;
  }[];
}

export interface Alert {
  id: string;
  elderlyId: string;
  caregiverId: string;
  type: 'missed_medication' | 'missed_appointment' | 'emergency' | 'inactivity' | 'check_in';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionTaken: boolean;
  actionDetails?: string;
}