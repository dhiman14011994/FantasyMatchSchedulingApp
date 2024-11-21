/* eslint-disable react-native/no-inline-styles */
import { View, Button, TouchableOpacity, Alert, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addSchedule } from '../../redux/scheduleSlice';
import CInput from '../../components/CInput';
import styles from './styles';
import CustomCalendarComponent from '../../components/CustomCalendarComponent/CustomCalendarComponent';
import CLabel from '../../components/CLabel';

const AddEditMatch = () => {
  const [day, setDay] = useState('');
  const [slots, setSlots] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startTime1, setStartTime1] = useState(new Date());
  const [endTime1, setEndTime1] = useState(new Date());
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showCalendar, setShowCalendar] = useState(false);



  const validateSlot = (slots: any, newSlot: any) => {
    return !slots.some(
      (slot: any) =>
        (newSlot.start < slot.end && newSlot.end > slot.start)
    );
  };

  const addSlot = () => {
    if (validateSlot(slots, { start: startTime, end:endTime })) {
      setSlots([...slots, { start: startTime, end:endTime }]);
      setStartTime('');
      setEndTime('');
      setStartTime1(new Date());
      setEndTime1(new Date());
    } else {
      Alert.alert('Overlapping time slots are not allowed!');
    }
  };

  const onTimeChange = (event: any, selectedDate: any) => {
    setShowEndTime(false); // Hide the picker after selecting a time
    setShowStartTime(false); // Hide the picker after selecting a time
    if (selectedDate) {
      if (showEndTime) {
        setStartTime1(selectedDate);
        setEndTime(selectedDate.toLocaleTimeString()); // Update the end time if the start time is selected after the end time
      }
      else {
        setEndTime1(selectedDate);
        setStartTime(selectedDate.toLocaleTimeString()); // Update the start time if the end time is selected before the start time
      }

    }
  };

  const saveSchedule = () => {
    dispatch(addSchedule({ day, slots }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
<TouchableOpacity activeOpacity={1} onPress={() => setShowCalendar(!showCalendar)}>
        <View
          style={{
            ...styles.inputContainer,
            pointerEvents: 'none',
          }}>
      <CInput label="Select Day" placeholder="Day (e.g., Monday)" setInput={setDay} input={day} />
      </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={1} onPress={() => setShowStartTime(!showStartTime)}>
        <View
          style={{
            ...styles.inputContainer,
            pointerEvents: 'none',
          }}>
          <CInput label="Start Time:" placeholder="Start Time (e.g., 3:00 PM)" input={startTime} />
        </View>

      </TouchableOpacity>


      <TouchableOpacity activeOpacity={1} onPress={() => setShowEndTime(true)} style={{marginTop:10}}>
        <View
          style={{
            ...styles.inputContainer,
            pointerEvents: 'none',
          }}>
          <CInput label="End Time:"  placeholder="End Time (e.g., 5:00 PM)"input={endTime} />
        </View>

      </TouchableOpacity>
      {(showEndTime || showStartTime) && <DateTimePicker value={showEndTime ? endTime1 : startTime1} mode="time" onChange={onTimeChange} />}

      <Button title="Add Slot" onPress={addSlot} />

      <FlatList
        data={slots}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: any) => (
          <CLabel text={`${item.start} - ${item.end}`}/>
        )}
      />
      <Button title="Save Schedule" onPress={saveSchedule} />
      {/* Calendar inside a Modal */}
      <Modal visible={showCalendar} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <CustomCalendarComponent onDaySelect={(data: any)=>{setDay(data.join(','));
            setShowCalendar(false)
          }}/>
          <Button title="Close" onPress={() => setShowCalendar(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default AddEditMatch;
