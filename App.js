import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import EventListItem from './component/EventListItem';
import EventInput from './component/EventInput';

export default function App() {
  const [eventList, setEventlist] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const addEventHandler = (events) =>{
    if(events.length === 0) {
      return;
    }
    setEventlist(currentEventList => [...currentEventList, 
      {id: Math.random().toString(), value: events}
    ]);
    setAddModal(false);
  };

  const cancelModeHandler = () => {
    setAddModal(false);
  }


  const removeEventHandler = (eventId) => {
     setEventlist((currentEventList) => {
     return currentEventList.filter((event) => event.id !== eventId)});
  }

  return (
    <View style={styles.parent}>
      <Button title="Add New Event" onPress={() => setAddModal(true)} />
     <EventInput visible={addModal} onAddEventHandler={addEventHandler} onCancel={cancelModeHandler} />
     <FlatList 
     keyExtractor={(item, index) => item.id}
     data={eventList}
     renderItem={itemData => <EventListItem id={itemData.item.id} onDelete={removeEventHandler} event={itemData.item.value} />}
     />
    </View>
  );
}

    const styles = StyleSheet.create({
    parent: {
      flex: 1,
      padding:60,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    });
