    
   import {
  Button,
ImageBackground,
TextInput,
TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,Image,Keyboard
} from 'react-native';
import {StackNavigator} from  'react-navigation';

import React, { Component } from 'react';


export default class Report extends Component {



  
  static navigationOptions = ({
    navigation})=>({
    title: 'Report User'
   

  });

  constructor(props) {
    super(props);
  
  this.state = {
    user: global.id,
    reported_user:this.props.navigation.state.params.id,
    description:""
    }
  }


record(){

return fetch('https://lit-falls-96282.herokuapp.com/report',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  user_id:global.id,
  reported_id: this.props.navigation.state.params.id, 
 report: this.state.description, 
  action:''
})
})
.then((response) => response.json())
.then((res) => {
 // just setState here e.g.
  if(res.message=="undefined"){
    alert("Something went wrong. Please try again.");
  }else
  {
   alert("Report sent. You issue will be handled in 24 hours.");
  }
  this.props.navigation.navigate('Members');
   })
   .done();

}

  render() {
    return (
      <Image source={require('./challenge.png')}
      
        style={styles.backgroundImage}> 
      
      
    

    <View style={styles.container}>
        
    <View style={styles.container}>
     <Text>User to report: {this.props.navigation.state.params.user}</Text>
 
    <Text>Describe Issue:</Text>
    <TextInput style = {styles.input}
              placeholderTextColor='rgba(28,53,63, 1)'
              placeholder='Describe Issue'
              autoCapitalize = 'none'
                   returnKeyType="done"
                   multiline={true}
                   numberofLines={6}

                   blurOnSubmit={false}
       onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
    
        onChangeText={(description)=>this.setState({description})} value={this.state.description} 
        
     underlineColorAndroid='transparent' pkaceholder='Describe Issue'>
        </TextInput>
        <Button  title="Send" onPress={() => this.record()}
        />
        </View>

    </View>
   
</Image>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 100,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
  container:{
    flex:1,
  
    justifyContent: 'center',
        },
  content:{
  margin:10,
  padding:10,
    alignItems:'center',
      justifyContent: 'center'
      
    },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
}
});
