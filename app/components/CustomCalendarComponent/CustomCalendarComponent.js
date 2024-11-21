import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CustomCalendarComponent = ({ onDaySelect }) => {
  const [selectedDays, setSelectedDays] = useState({});

  const toggleDay = (day) => {
    const updatedDays = { ...selectedDays };
    if (updatedDays[day]) {
      delete updatedDays[day];
    } else {
      updatedDays[day] = { selected: true };
    }
    setSelectedDays(updatedDays);
    onDaySelect(Object.keys(updatedDays));
  };

  const selectAllDays = () => {
    // const allDays = {};
    // const daysInWeek = ['2024-11-20', '2024-11-21', '2024-11-22']; // Example range
    // daysInWeek.forEach((day) => (allDays[day] = { selected: true }));
    // setSelectedDays(allDays);
    // onDaySelect(allDays);

    const allDays = {};
    const daysInWeek = Array.from({ length: 7 }, (_, i) =>
      new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    );
    daysInWeek.forEach((day) => (allDays[day] = { selected: true }));
    setSelectedDays(allDays);
    onDaySelect(Object.keys(allDays));
  };

  return (
    <View>
      <Calendar onDayPress={(day) => toggleDay(day.dateString)} markedDates={selectedDays} />
      <Button title="Select All Days" onPress={selectAllDays} />
    </View>
  );
};

export default CustomCalendarComponent;
