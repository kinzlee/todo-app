import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const EventListItem = ({onDelete, id, event}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onDelete.bind(this, id)}>
            <View style={styles.listItem}>
             <Text> {event} </Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 1,
        borderWidth: 1,
      }
});

export default EventListItem;