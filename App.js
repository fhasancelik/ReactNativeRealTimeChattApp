import React, {useEffect} from 'react';
import { Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-native-paper';

import ChatList from './screens/ChatList.js'
import Settings from './screens/Settings.js'
import SignIn from './screens/SignIn.js'
import SignUp from './screens/SignUp.js'
import Chat from './screens/Chat.js'



import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { auth } from './firebaseconfig.js';
import { onAuthStateChanged} from 'firebase/auth';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {

  
const navigation=useNavigation()


  return(  <Tabs.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        return <Ionicons name={route.name === "ChatList" ? 'chatbubbles' : 'settings'} color={color} size={size} />

      }
    })}

  >
    <Tabs.Screen name='Settings' component={Settings} />
    <Tabs.Screen name='SignUp' component={SignUp} />


  </Tabs.Navigator>)
};



function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={TabsNavigator} options={{ headerShown: false }} />

          <Stack.Screen name='Chat' component={Chat} />
          <Stack.Screen name='SignIn' component={SignIn} options={{presentation:'fullScreenModal'}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{presentation:'fullScreenModal'}}/>
          <Stack.Screen name='Chatlist' component={ChatList} options={{presentation:'fullScreenModal'}}/>

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App