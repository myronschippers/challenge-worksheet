const allowedLocations = ['New York', 'Boston', 'San Francisco'];

const availableDoctors = [
  { id: 1, name: 'Dr. Smith', location: 'New York' },
  { id: 2, name: 'Dr. Jones', location: 'Boston' },
  { id: 3, name: 'Dr. Patel', location: 'San Francisco' },
];

const availableTimeSlots = {
  1: ['2025-06-24T10:00', '2025-06-24T11:00'], // Dr. Smith
  2: ['2025-06-24T09:30'], // Dr. Jones
  3: ['2025-06-24T14:00', '2025-06-24T15:00'], // Dr. Patel
};

const requestedAppointments = [
  {
    patientId: 101,
    location: 'New York',
    doctorId: 1,
    time: '2025-06-24T10:00',
  },
  { patientId: 102, location: 'Miami', doctorId: 2, time: '2025-06-24T09:30' },
  { patientId: 103, location: 'Boston', doctorId: 2, time: '2025-06-24T11:00' },
  {
    patientId: 104,
    location: 'San Francisco',
    doctorId: 3,
    time: '2025-06-24T15:00',
  },
];

function validateAppointments(
  requestedAppointments,
  allowedLocations,
  availableDoctors,
  availableTimeSlots
) {
  return requestedAppointments.filter((appointment) => {
    const { location, doctorId, time } = appointment;

    // 1. Check if patient location is allowed
    if (!allowedLocations.includes(location)) return false;

    // 2. Check if doctor is available and matches patient location
    const doctor = availableDoctors.find(
      (doc) => doc.id === doctorId && doc.location === location
    );
    if (!doctor) return false;

    // 3. Check if the requested time is available for that doctor
    const doctorSlots = availableTimeSlots[doctorId] || [];
    if (!doctorSlots.includes(time)) return false;

    return true;
  });
}

const validAppointments = validateAppointments(
  requestedAppointments,
  allowedLocations,
  availableDoctors,
  availableTimeSlots
);

console.log(validAppointments);
