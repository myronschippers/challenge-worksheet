import { doctorsList } from '../doctors';
import { patientsList } from '../patients';

import type { AppointmentType } from './types';

const DURATION_OPTIONS_IN_MINUTES = [30, 60, 90, 120, 150, 180];

function getDateTimeForEndBasedOnDuration(
  dateTimeStartIso: string,
  durationInMinutes: number
): Date {
  const endDateTime = new Date(dateTimeStartIso);
  endDateTime.setMinutes(endDateTime.getMinutes() + durationInMinutes);
  return endDateTime;
}

export const appointmentsList: AppointmentType[] = [
  {
    id: 1,
    date_time_start: new Date('2025-06-23T01:07:06Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[17],
    patient: patientsList[18],
  },
  {
    id: 2,
    date_time_start: new Date('2025-06-23T18:26:23Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[8],
    patient: patientsList[17],
  },
  {
    id: 3,
    date_time_start: new Date('2025-06-24T05:28:45Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[13],
    patient: patientsList[19],
  },
  {
    id: 4,
    date_time_start: new Date('2025-06-25T11:47:37Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[10],
    patient: patientsList[19],
  },
  {
    id: 5,
    date_time_start: new Date('2025-06-24T15:03:45Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[4],
    patient: patientsList[7],
  },
  {
    id: 6,
    date_time_start: new Date('2025-06-26T06:10:22Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[9],
    patient: patientsList[13],
  },
  {
    id: 7,
    date_time_start: new Date('2025-06-23T12:18:02Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[7],
    patient: patientsList[5],
  },
  {
    id: 8,
    date_time_start: new Date('2025-06-25T12:47:39Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[14],
    patient: patientsList[11],
  },
  {
    id: 9,
    date_time_start: new Date('2025-06-24T22:06:46Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[4],
    patient: patientsList[2],
  },
  {
    id: 10,
    date_time_start: new Date('2025-06-24T08:29:48Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[6],
    patient: patientsList[14],
  },
  {
    id: 11,
    date_time_start: new Date('2025-06-24T07:25:14Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[17],
    patient: patientsList[12],
  },
  {
    id: 12,
    date_time_start: new Date('2025-06-23T23:05:38Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[15],
    patient: patientsList[14],
  },
  {
    id: 13,
    date_time_start: new Date('2025-06-24T11:35:51Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[6],
    patient: patientsList[6],
  },
  {
    id: 14,
    date_time_start: new Date('2025-06-23T12:07:03Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[4],
    patient: patientsList[1],
  },
  {
    id: 15,
    date_time_start: new Date('2025-06-26T07:28:11Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[11],
    patient: patientsList[2],
  },
  {
    id: 16,
    date_time_start: new Date('2025-06-26T16:18:34Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[5],
    patient: patientsList[12],
  },
  {
    id: 17,
    date_time_start: new Date('2025-06-25T18:29:36Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[1],
    patient: patientsList[6],
  },
  {
    id: 18,
    date_time_start: new Date('2025-06-23T02:57:54Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[10],
    patient: patientsList[5],
  },
  {
    id: 19,
    date_time_start: new Date('2025-06-24T17:00:35Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[10],
    patient: patientsList[17],
  },
  {
    id: 20,
    date_time_start: new Date('2025-06-24T01:21:32Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[12],
    patient: patientsList[7],
  },
  {
    id: 21,
    date_time_start: new Date('2025-06-26T03:58:46Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[4],
    patient: patientsList[11],
  },
  {
    id: 22,
    date_time_start: new Date('2025-06-23T14:54:26Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[2],
    patient: patientsList[4],
  },
  {
    id: 23,
    date_time_start: new Date('2025-06-26T16:10:56Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[1],
    patient: patientsList[17],
  },
  {
    id: 24,
    date_time_start: new Date('2025-06-25T01:54:24Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[12],
    patient: patientsList[2],
  },
  {
    id: 25,
    date_time_start: new Date('2025-06-24T11:36:36Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[0],
    patient: patientsList[6],
  },
  {
    id: 26,
    date_time_start: new Date('2025-06-26T13:04:53Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[6],
    patient: patientsList[14],
  },
  {
    id: 27,
    date_time_start: new Date('2025-06-24T01:58:22Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[15],
    patient: patientsList[13],
  },
  {
    id: 28,
    date_time_start: new Date('2025-06-26T13:44:12Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[4],
    patient: patientsList[12],
  },
  {
    id: 29,
    date_time_start: new Date('2025-06-24T16:05:46Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[10],
    patient: patientsList[16],
  },
  {
    id: 30,
    date_time_start: new Date('2025-06-26T11:36:23Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[15],
    patient: patientsList[11],
  },
  {
    id: 31,
    date_time_start: new Date('2025-06-23T20:35:20Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[10],
    patient: patientsList[0],
  },
  {
    id: 32,
    date_time_start: new Date('2025-06-23T15:39:36Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[12],
    patient: patientsList[19],
  },
  {
    id: 33,
    date_time_start: new Date('2025-06-23T16:33:31Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[17],
    patient: patientsList[11],
  },
  {
    id: 34,
    date_time_start: new Date('2025-06-26T18:05:28Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[6],
    patient: patientsList[15],
  },
  {
    id: 35,
    date_time_start: new Date('2025-06-23T01:21:16Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[9],
    patient: patientsList[3],
  },
  {
    id: 36,
    date_time_start: new Date('2025-06-25T02:39:31Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[8],
    patient: patientsList[4],
  },
  {
    id: 37,
    date_time_start: new Date('2025-06-23T09:03:53Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[17],
    patient: patientsList[6],
  },
  {
    id: 38,
    date_time_start: new Date('2025-06-26T03:35:41Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[9],
    patient: patientsList[8],
  },
  {
    id: 39,
    date_time_start: new Date('2025-06-25T07:20:22Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[17],
    patient: patientsList[13],
  },
  {
    id: 40,
    date_time_start: new Date('2025-06-25T14:34:29Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[6],
    patient: patientsList[11],
  },
  {
    id: 41,
    date_time_start: new Date('2025-06-25T12:19:10Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[14],
    patient: patientsList[7],
  },
  {
    id: 42,
    date_time_start: new Date('2025-06-23T15:39:40Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[13],
    patient: patientsList[17],
  },
  {
    id: 43,
    date_time_start: new Date('2025-06-24T20:04:12Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[17],
    patient: patientsList[14],
  },
  {
    id: 44,
    date_time_start: new Date('2025-06-24T12:47:12Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[16],
    patient: patientsList[18],
  },
  {
    id: 45,
    date_time_start: new Date('2025-06-25T15:17:44Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[2],
    patient: patientsList[15],
  },
  {
    id: 46,
    date_time_start: new Date('2025-06-25T00:37:34Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[6],
    patient: patientsList[11],
  },
  {
    id: 47,
    date_time_start: new Date('2025-06-26T20:16:51Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[13],
    patient: patientsList[13],
  },
  {
    id: 48,
    date_time_start: new Date('2025-06-25T15:00:13Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[6],
    patient: patientsList[7],
  },
  {
    id: 49,
    date_time_start: new Date('2025-06-25T23:40:49Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[9],
    patient: patientsList[2],
  },
  {
    id: 50,
    date_time_start: new Date('2025-06-23T00:57:16Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[10],
    patient: patientsList[2],
  },
  {
    id: 51,
    date_time_start: new Date('2025-06-25T23:42:03Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[17],
    patient: patientsList[17],
  },
  {
    id: 52,
    date_time_start: new Date('2025-06-25T19:20:37Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[13],
    patient: patientsList[7],
  },
  {
    id: 53,
    date_time_start: new Date('2025-06-26T22:00:20Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[7],
    patient: patientsList[17],
  },
  {
    id: 54,
    date_time_start: new Date('2025-06-26T06:00:20Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[8],
    patient: patientsList[9],
  },
  {
    id: 55,
    date_time_start: new Date('2025-06-26T17:37:26Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[3],
    patient: patientsList[7],
  },
  {
    id: 56,
    date_time_start: new Date('2025-06-26T01:08:43Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[2],
    patient: patientsList[9],
  },
  {
    id: 57,
    date_time_start: new Date('2025-06-24T23:39:38Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[1],
    patient: patientsList[19],
  },
  {
    id: 58,
    date_time_start: new Date('2025-06-23T00:43:55Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[16],
    patient: patientsList[1],
  },
  {
    id: 59,
    date_time_start: new Date('2025-06-23T06:11:16Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[10],
    patient: patientsList[9],
  },
  {
    id: 60,
    date_time_start: new Date('2025-06-23T15:52:04Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[9],
    patient: patientsList[8],
  },
  {
    id: 61,
    date_time_start: new Date('2025-06-23T22:21:24Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[17],
    patient: patientsList[13],
  },
  {
    id: 62,
    date_time_start: new Date('2025-06-24T07:27:18Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[8],
    patient: patientsList[12],
  },
  {
    id: 63,
    date_time_start: new Date('2025-06-26T05:12:21Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[15],
    patient: patientsList[0],
  },
  {
    id: 64,
    date_time_start: new Date('2025-06-24T22:31:26Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[17],
    patient: patientsList[6],
  },
  {
    id: 65,
    date_time_start: new Date('2025-06-26T07:15:43Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[10],
    patient: patientsList[9],
  },
  {
    id: 66,
    date_time_start: new Date('2025-06-23T11:30:20Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[11],
    patient: patientsList[14],
  },
  {
    id: 67,
    date_time_start: new Date('2025-06-23T06:04:21Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[3],
    patient: patientsList[15],
  },
  {
    id: 68,
    date_time_start: new Date('2025-06-25T00:22:39Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[1],
    patient: patientsList[17],
  },
  {
    id: 69,
    date_time_start: new Date('2025-06-24T03:35:47Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[3],
    patient: patientsList[13],
  },
  {
    id: 70,
    date_time_start: new Date('2025-06-24T23:51:07Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[4],
    patient: patientsList[19],
  },
  {
    id: 71,
    date_time_start: new Date('2025-06-26T06:47:21Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[2],
    patient: patientsList[6],
  },
  {
    id: 72,
    date_time_start: new Date('2025-06-26T18:50:03Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[6],
    patient: patientsList[11],
  },
  {
    id: 73,
    date_time_start: new Date('2025-06-26T08:49:23Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[12],
    patient: patientsList[12],
  },
  {
    id: 74,
    date_time_start: new Date('2025-06-23T04:42:24Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[1],
    patient: patientsList[18],
  },
  {
    id: 75,
    date_time_start: new Date('2025-06-23T12:07:26Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[15],
    patient: patientsList[9],
  },
  {
    id: 76,
    date_time_start: new Date('2025-06-25T18:23:04Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[8],
    patient: patientsList[7],
  },
  {
    id: 77,
    date_time_start: new Date('2025-06-26T12:05:33Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[1],
    patient: patientsList[5],
  },
  {
    id: 78,
    date_time_start: new Date('2025-06-23T12:57:27Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[6],
    patient: patientsList[0],
  },
  {
    id: 79,
    date_time_start: new Date('2025-06-24T23:13:19Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[9],
    patient: patientsList[3],
  },
  {
    id: 80,
    date_time_start: new Date('2025-06-26T09:15:28Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[13],
    patient: patientsList[9],
  },
  {
    id: 81,
    date_time_start: new Date('2025-06-23T22:51:00Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[8],
    patient: patientsList[15],
  },
  {
    id: 82,
    date_time_start: new Date('2025-06-25T01:25:15Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[2],
    patient: patientsList[2],
  },
  {
    id: 83,
    date_time_start: new Date('2025-06-26T04:37:18Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[7],
    patient: patientsList[19],
  },
  {
    id: 84,
    date_time_start: new Date('2025-06-23T05:34:03Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[8],
    patient: patientsList[11],
  },
  {
    id: 85,
    date_time_start: new Date('2025-06-23T21:40:38Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[1],
    doctor: doctorsList[16],
    patient: patientsList[3],
  },
  {
    id: 86,
    date_time_start: new Date('2025-06-26T20:20:44Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[4],
    patient: patientsList[19],
  },
  {
    id: 87,
    date_time_start: new Date('2025-06-24T16:17:54Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[1],
    patient: patientsList[6],
  },
  {
    id: 88,
    date_time_start: new Date('2025-06-26T15:01:57Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[1],
    patient: patientsList[15],
  },
  {
    id: 89,
    date_time_start: new Date('2025-06-23T05:35:31Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[16],
    patient: patientsList[17],
  },
  {
    id: 90,
    date_time_start: new Date('2025-06-24T00:24:10Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[11],
    patient: patientsList[9],
  },
  {
    id: 91,
    date_time_start: new Date('2025-06-23T20:16:38Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[6],
    patient: patientsList[0],
  },
  {
    id: 92,
    date_time_start: new Date('2025-06-26T21:07:01Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[0],
    patient: patientsList[14],
  },
  {
    id: 93,
    date_time_start: new Date('2025-06-25T00:45:13Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[8],
    patient: patientsList[15],
  },
  {
    id: 94,
    date_time_start: new Date('2025-06-23T19:41:46Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[9],
    patient: patientsList[10],
  },
  {
    id: 95,
    date_time_start: new Date('2025-06-26T06:26:44Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[5],
    doctor: doctorsList[5],
    patient: patientsList[7],
  },
  {
    id: 96,
    date_time_start: new Date('2025-06-24T21:57:13Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[4],
    doctor: doctorsList[15],
    patient: patientsList[19],
  },
  {
    id: 97,
    date_time_start: new Date('2025-06-24T10:57:24Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[3],
    doctor: doctorsList[8],
    patient: patientsList[1],
  },
  {
    id: 98,
    date_time_start: new Date('2025-06-24T08:55:34Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[2],
    doctor: doctorsList[17],
    patient: patientsList[9],
  },
  {
    id: 99,
    date_time_start: new Date('2025-06-25T10:04:11Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[6],
    patient: patientsList[12],
  },
  {
    id: 100,
    date_time_start: new Date('2025-06-24T14:45:41Z'),
    get date_time_end() {
      return getDateTimeForEndBasedOnDuration(
        this.date_time_start.toISOString(),
        this.duration_minutes
      );
    },
    duration_minutes: DURATION_OPTIONS_IN_MINUTES[0],
    doctor: doctorsList[10],
    patient: patientsList[16],
  },
];
