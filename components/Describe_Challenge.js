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
import Ziggeo from 'react-native-ziggeo-library';
import React, { Component } from 'react';


export default class Describe_Challenge extends Component {



  
  static navigationOptions = ({
    navigation})=>({
    title: 'Record Challenge'
   

  });

  constructor(props) {
    super(props);
  
  this.state = {
    description: ''

    }
  }




  async record() {
    var appToken = "r15ae15300147833b83403406cc336ca";
    Ziggeo.setAppToken(appToken);
    Ziggeo.setCameraSwitchEnabled(true);
    Ziggeo.setCoverSelectorEnabled(true);
    Ziggeo.setCamera(Ziggeo.REAR_CAMERA);
    const recorderEmitter = Ziggeo.recorderEmitter();
    const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
    try
    {
      
        //record and upload the video and return its token
        var token = await Ziggeo.record();
    
        if (token){
          Ziggeo.play(token);
return fetch('https://lit-falls-96282.herokuapp.com/challenges',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  userid:global.id,
  description: this.state.description, 
  ziggeo_id: token
})
})
.then((response) => response.json())
.then((res) => {
 // just setState here e.g.

  if(res.message=="undefined"){
    alert("Something went wrong. Please try again.");
  }else
  {
   alert('Challenge Recorded');
  }
 
   })
   .done();
  }
          
          
            }
      
      catch(e)
      {
          //uploading error or upload was cancelled by user
          alert(e);
      }
  }



 
  render() {
    return (
      <Image source={require('./challenge.png')}
      
        style={styles.backgroundImage}> 
      
      
    

    <View style={styles.container}>
    
      
    <View style={styles.container}>
    <Text>Record Challenge Below:</Text>
    <TextInput style = {styles.input}
              placeholderTextColor='rgba(28,53,63, 1)'
              placeholder='Describe Challenge'
              autoCapitalize = 'none'
                   returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
    
        onChangeText={(description)=>this.setState({description})} value={this.state.description} 
        
     underlineColorAndroid='transparent' pkaceholder='Describe Challenge'>
        </TextInput>
        <Button  title="Record" onPress={() => this.record()}
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
    height: 40,
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
