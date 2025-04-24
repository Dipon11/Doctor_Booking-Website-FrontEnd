// adtoodd.js

const STORAGE_KEY = 'bookedAppointments';

export const addToStoreDb = (id) => {
  let storedBookings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // Only store if it doesn't already exist
  if (!storedBookings.includes(id)) {
    storedBookings.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedBookings));
  }
};

export const getStoredBook = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const removeFromStoreDb = (id) => {
  let storedBookings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedBookings = storedBookings.filter(bookedId => parseInt(bookedId) !== parseInt(id));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
};
