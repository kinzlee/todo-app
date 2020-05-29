import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const EventInput = (props) => {
  const [enteredEvent, setEnteredEvent] = useState('');

  const enteredEventHandler = (event) => {
      setEnteredEvent(event);
  };

  const eventHandler = () => {
    props.onAddEventHandler(enteredEvent);
    setEnteredEvent('');
  }
  
    return (
      <Modal visible={props.visible}>
    <View style={styles.childInputContainer} >
      <TextInput 
       placeholder="What do you want to do"
       style={styles.childInput} 
       onChangeText={enteredEventHandler} 
       value={enteredEvent}
       /> 
       <View style={styles.buttonContainer}>
         <View style={styles.button}>
      <Button title="ADD" onPress={eventHandler}/>
        </View>
        <View style={styles.button}>
      <Button title="CANCEL" color="red" onPress={props.onCancel} />
      </View>
      </View>
     </View>
     </Modal>
    );
};

const styles = StyleSheet.create({
    childInputContainer: {
        // padding: 30,
        margin: 50,
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%'
      },
      childInput: {
        width: '80%', 
         borderColor:'grey', 
         borderWidth:1.2, 
         padding: 10,
         marginBottom: 12
      },

      buttonContainer: {
        flexDirection: 'row',
        // justifyContent: ''
      },
      
      button: {
        width: '40%'
      }
});

export default EventInput;