const getStoredBook = () => {
  const storedAppointment = localStorage.getItem('booklist');
  return storedAppointment ? JSON.parse(storedAppointment) : [];
};

const addToStoreDb = (id) => {
  const storedAppointmentBook = getStoredBook();
  if (storedAppointmentBook.includes(id)) {
    alert('Appointment Already Booked');
  } else {
    storedAppointmentBook.push(id);
    localStorage.setItem('booklist', JSON.stringify(storedAppointmentBook));
  }
};

const removeFromStoreDb = (id) => {
  const storedAppointmentBook = getStoredBook();
  const updated = storedAppointmentBook.filter(item => item !== id);
  localStorage.setItem('booklist', JSON.stringify(updated));
};

export { addToStoreDb, getStoredBook, removeFromStoreDb };
