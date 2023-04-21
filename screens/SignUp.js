import React,{useState} from 'react';
import {View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {TextInput,Button,Alert,Subheading} from 'react-native-paper';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig.js';
import { useNavigation } from '@react-navigation/native';




function SignUp() {

  const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState('')

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
    
    const onHandleSignup = () => {
      setIsLoading(true)
      if (email !== '' && password !== '') {
    createUserWithEmailAndPassword(auth, email, password)
          .then(() => loading())
          .catch((err)=>{console.log(err.message)} );
      }
    };
  

  return (
<View style={{margin:16}}>

{!!error && (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error}
        </Subheading>
      )}



  <TextInput label="User Name" value={name} onChangeText={(text)=>{setName(text)}} />
  <TextInput keyboardType="email-address" label="E-Mail" style={{marginTop:12}} value={email} onChangeText={(text)=>{setEmail(text)}}/>
  <TextInput secureTextEntry label="PassWord" style={{marginTop:12}} value={password} onChangeText={(text)=>{setPassword(text)}}/>

  <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:16}}>
<Button compact>Sign In</Button>
<Button compact onPress={()=>{}}>back home </Button>
<Button mode="contained" onPress={()=>{onHandleSignup()} } loading={isLoading} >Sign Up</Button>

  </View>
</View>


    
  );
}



export default SignUp