import {
    Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import Ziggeo from 'react-native-ziggeo-library';
import React, { Component } from 'react';
  

  export default class ChallengeSO extends Component {

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
          console.log("Token:"+token);
          if (token){
             alert("Token:"+token);
  
  return fetch('https://lit-falls-96282.herokuapp.com/challenges',
  {method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userid:global.id,
    description: global.description, 
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
     alert(res.message);
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
  

  async upload() {
      var appToken = "r15ae15300147833b83403406cc336ca";
      Ziggeo.setAppToken(appToken);
      const recorderEmitter = Ziggeo.recorderEmitter();
      const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
      try
      {
          //select and upload the video and return its token
          var token = await Ziggeo.upload();
        









          if (token){
        //      Ziggeo.play(token);
          
          alert("global id" + global.id);
          alert("description" +this.state.description);
          alert("ziggeo id" + ziggeo_id)
        alert("Token:"+token);

return fetch('https://lit-falls-96282.herokuapp.com/challenges',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  username:global.id,
  description: this.state.description, 
  ziggeo_id: this.state.ziggeo_id
})
})
.then((response) => response.json())
.then((res) => {
 // just setState here e.g.
  if(res.message=="undefined"){
    alert("Something went wrong. Please try again.");
  }else
  {
   alert(res.message);
  }
  this.props.navigation.navigate('Login');
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

  async uploadFile() {
      var appToken = "r15ae15300147833b83403406cc336ca";
      Ziggeo.setAppToken(appToken);
      const recorderEmitter = Ziggeo.recorderEmitter();
      const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
      try
      {
          //upload some file by its name and return its token
          var token = await Ziggeo.upload("FILE_NAME");
          alert("Token:"+token);
          if (token){
              Ziggeo.play(token);
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
       
        <ImageBackground source={require('./challenge.png')}
        style={{flex:1,width:null,height:null}}> 
      

      <View style={styles.container}>
            <Button
            onPress={this.record}
            title="Record"
            accessibilityLabel="Record"
            />
           
          </View>

      
      <View style={styles.container}>
      
          
     <View style={styles.content}>
       <View style={styles.inputContainer}>
     
      
         <Text>Home</Text>
      
         </View>
    </View>
</View>
</ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  