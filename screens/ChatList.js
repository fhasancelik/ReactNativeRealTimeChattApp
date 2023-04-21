import React,{useState} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { List,Avatar,Divider,FAB,Dialog,Portal,Button,TextInput,Text } from 'react-native-paper';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';







function ChatList() {

const [dialog,setDialog]=useState(false)

  return (
<View style={{flex:1,}}> 
  <List.Item
    title="User Name"
    description="Last Message"
    left={()=><Avatar.Text label='UN' size={56} />}
  />
  <Divider />

  <Portal>
    <Dialog visible={dialog} onDismiss={()=>{setDialog(false)}}>
    <Dialog.Title>New Chat</Dialog.Title>
    <Dialog.Content>
             
      <TextInput label="Enter User E-Mail"/>
      
      
       </Dialog.Content>
    <Dialog.Actions>
              <Button onPress={()=>{setDialog(false)}}>Cancel</Button>
           
              <Button onPress={()=>{Alert.alert("sa")}}>Save</Button>
           
           
           
            </Dialog.Actions>


    </Dialog>
  </Portal>

  <FAB onPress={()=>{setDialog(true)}} icon="plus" style={{position:'absolute',bottom:16,right:16}}/>
</View>
    
  );
}



export default ChatList