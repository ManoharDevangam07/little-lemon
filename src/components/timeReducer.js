// timeReducer.js

export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      // Logic to update times based on date can go here
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
};
