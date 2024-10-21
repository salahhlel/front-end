import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AddImage from './widgets/AddImage.jsx'
import InputsAsk from './widgets/InputsAsk.jsx';
const AddPost=()=>{

    return(
        <View style={styles.view1}>
            <View style={styles.view2}>
            <AddImage/>
            <AddImage/>
            </View>
            <View style={styles.view3}>
                <InputsAsk/>
            </View>
            <TouchableOpacity>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    view1:{
        flex:1,
        padding:"5%"
    },
    view2:{
        flexDirection:"row",
        justifyContent:"space-between",
        flex:1,
        paddingTop:10
    },
    view3:{
        flex:1
    }
});
export default AddPost;