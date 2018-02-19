import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';
import Ziggeo from 'react-native-ziggeo-library';
import {StackNavigator} from  'react-navigation';
import Members from './components/Members';
import Login from './components/Login';
import Signup from './components/Signup';
import ChallengeSO from './components/ChallengeSO';
import SeeChallenges from './components/SeeChallenges';
import UserPage from './components/UserPage';
import UserSetup from './components/UserSetup';
import Search from './components/Search';
import Friends from './components/Friends';
import Open_Challenges from './components/Open_Challenges';
import Mastered_Challenges from './components/Mastered_Challenges';
import Clubs from './components/Clubs';
import Hobbies from './components/Hobbies';
import Messages from './components/Messages';
import See_User from './components/See_User';
import View_Request from './components/View_Request';
import Describe_Challenge from './components/Describe_Challenge';
import Who_Challenge from './components/Who_Challenge';
import Choose_Friend from './components/Choose_Friend';
import Challenges from './components/Challenges';
import See_User_Name from './components/See_User_Name';
import New_Challenges from './components/New_Challenges';
import View_New_Request from './components/View_New_Request';
import View_New_Challenge from './components/View_New_Challenge';
import View_Open_Challenge from './components/View_Open_Challenge';
import Report from './components/Report';
const Application = StackNavigator({
 
  Login:{screen: Login},
   UserSetup:{screen: UserSetup},
   Search:{screen:Search},
  Signup:{screen: Signup},
  Members:{screen: Members},
ChallengeSO:{screen: ChallengeSO},
SeeChallenges:{screen: SeeChallenges},
UserPage:{screen: UserPage},
Friends:{screen: Friends},
Open_Challenges:{screen: Open_Challenges},
Mastered_Challenges:{screen: Mastered_Challenges},
Clubs:{screen:Clubs},
Hobbies:{screen:Hobbies},
Messages:{screen:Messages},
See_User:{screen:See_User},
View_Request:{screen:View_Request},
Describe_Challenge:{screen:Describe_Challenge},
Who_Challenge:{screen:Who_Challenge},
Choose_Friend:{screen:Choose_Friend},
Challenges:{screen: Challenges},
See_User_Name:{screen:See_User_Name},
New_Challenges:{screen:New_Challenges},
View_New_Request:{screen:View_New_Request},
View_New_Challenge:{screen:View_New_Challenge},
View_Open_Challenge:{screen:View_Open_Challenge},
Report:{screen:Report},

});
export default class App extends React.Component {

    
    render() {
      console.disableYellowBox = true;
        return (
            <Application/> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
