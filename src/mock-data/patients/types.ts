import type { DoctorType } from '../doctors';

export type PatientType = {
  id: number;
  first_name: string;
  last_name: string;
  primary_doctor: DoctorType;
};
