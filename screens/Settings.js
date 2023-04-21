import React,{useEffect,useState} from 'react';
import { StyleSheet,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List,Avatar,Divider,FAB,Dialog,Portal,Button,TextInput,Text,Title,Subheading } from 'react-native-paper';


import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseconfig.js';

const Stack=createNativeStackNavigator()





function Settings() {

const [uname,setUname]=useState('')
const [uemail,setUemail]=useState('')


useEffect(() => {
  console.log(auth.currentUser)
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUname(user.displayName);
      setUemail(user.email);
    } else {
      console.log('Kullanıcı oturumu açmamış.');
    }
  });

  return unsubscribe;
}, [])


  return (
<View style={{alignItems:"center",marginTop:20}}>
  <Avatar.Text label='UN'/>
  <Title>{uname}</Title>
  <Subheading>{uemail}</Subheading>
  <Button>Sign Out</Button>

</View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings