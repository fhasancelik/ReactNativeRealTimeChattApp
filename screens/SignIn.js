import React,{useState} from 'react';
import {View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {TextInput,Button,Alert,Subheading} from 'react-native-paper';

import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseconfig.js';
import { useNavigation } from '@react-navigation/native';




function SignIn() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const[isLoading,setIsLoading]=useState(false)
const[error,setError]=useState('')

const navigation=useNavigation()

function loading(){
  console.log('Signup success')
  setIsLoading(false)
 

}

function errorloading(errmessage){

  let message=errmessage.message;
setError(message)
  
  setIsLoading(false)

  return message
 

}

const onHandleSignin = () => {
  setIsLoading(true)
  if (email !== '' && password !== '') {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => loading())
      .catch((err)=>{console.log("yy")} );
  }
};


  return (
<View style={{margin:16}}>




 
  <TextInput keyboardType="email-address" label="E-Mail" style={{marginTop:12}} value={email} onChangeText={(text)=>{setEmail(text)}}/>
  <TextInput secureTextEntry label="PassWord" style={{marginTop:12}} value={password} onChangeText={(text)=>{setPassword(text)}}/>

  <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:16}}>


<Button  onPress={()=>{navigation.navigate('SignUp')} } loading={isLoading} >Sign Up</Button>
<Button mode="contained" compact onPress={()=>{onHandleSignin()} }>Sign In</Button>

  </View>
</View>


    
  );
}



export default SignIn