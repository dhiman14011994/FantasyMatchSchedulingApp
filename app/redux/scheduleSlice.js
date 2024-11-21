import { createSlice } from '@reduxjs/toolkit';

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    schedules: [], 
  },
  reducers: {
    addSchedule(state, action) {
      state.schedules.push(action.payload);
    },
    deleteSchedule(state, action) {
      state.schedules = state.schedules.filter(schedule => schedule.day !== action.payload);
    },
    editSchedule(state, action) {
      const { day, updatedSlots } = action.payload;
      const schedule = state.schedules.find(schedule => schedule.day === day);
      if (schedule) schedule.slots = updatedSlots;
    },
    deleteSlot(state, action) {
      const { day, slotIndex } = action.payload;
      state.schedules = state.schedules.filter(schedule => schedule.day!== day);
    },
  },
});

export const { addSchedule, deleteSchedule, editSchedule, deleteSlot } = scheduleSlice.actions;
export default scheduleSlice.reducer;