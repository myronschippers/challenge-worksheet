import type { DoctorType } from '../doctors';
import type { PatientType } from '../patients';

export type AppointmentType = {
  id: number;
  date_time_start: Date;
  date_time_end: Date;
  duration_minutes: number;
  doctor: DoctorType;
  patient: PatientType;
};
