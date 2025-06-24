import type { LocationType } from '../locations';

export type DoctorType = {
  id: number;
  first_name: string;
  last_name: string;
  location: LocationType;
};
