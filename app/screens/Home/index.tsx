import { View, Text, Button, FlatList, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../utils/routesName';
import { fetchSlots } from '../../db/database';
import { deleteSlot } from '../../redux/scheduleSlice';



const Home = () => {
  const schedules = useSelector((state: any) => state.schedule.schedules);
  const [dbSchedules, setDbSchedules] = useState([]);
  const dispatch: any = useDispatch();
  const navigation = useNavigation();
  const isFocused=useIsFocused();

  useEffect(() => {
    fetchSlots((data: any) => setDbSchedules(data));
  }, [schedules, isFocused]);

  const renderItem = ({ item, index }: any) =>{
    console.log(item);
    return(
      <View style={styles.item}>
      <Text style={styles.title}>{item.day}</Text>
      {item.slots.map((it: any)=><Text>{`${it.start} - ${it.end}`}</Text>)}
      <View style={{flexDirection:'row', justifyContent: 'space-around', marginTop:10}}>
        <Button title="Edit" onPress={()=>navigation.navigate(RouteNames.ADD_EDIT_MATCH, {schedule: item})} />
        <Button title="Delete" onPress={()=>handleDelete(item.day, index)} />
      </View>
    </View>
  )}

  const handleDelete = (day: any, index: any) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this slot?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            dispatch(deleteSlot({ day, slotIndex:index }));

          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={schedules}
        renderItem={renderItem}
      />

      {/* @ts-ignore*/}
      <Button title="Add Match" onPress={() => navigation.navigate(RouteNames.ADD_EDIT_MATCH)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 16, backgroundColor: '#f9f9f9', marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default Home
