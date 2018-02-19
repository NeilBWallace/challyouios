import {
    ImageBackground,
    TextInput,
    TouchableOpacity,
      Platform,
      StyleSheet,
      Text,
      View,
      FlatList,
      AppRegistry,
      Button,
      Image,
      ActivityIndicator,
      ScrollView,Keyboard
    
    } from 'react-native';
    import {StackNavigator} from  'react-navigation';
    import api from './api';
  import React, { Component } from 'react';
  
  import firebase from 'firebase';
  import RNFetchBlob from 'react-native-fetch-blob';
  
  import ImagePicker from 'react-native-image-crop-picker';
  update_details=()=>{
    alert('update details');
  }

  const config = {
    apiKey: "AIzaSyCE8z153bgKkDLJeGLRhIUrH4BC_7RLzU4",
    authDomain: "challenge-me-11dcc.firebaseapp.com",
    databaseURL: "https://challenge-me-11dcc.firebaseio.com",
    projectId: "challenge-me-11dcc",
    storageBucket: "challenge-me-11dcc.appspot.com",
    messagingSenderId: "406718256646"
  };
  firebase.initializeApp(config);


    export default class UserSetup extends Component {
  
      static navigationOptions = ({
        navigation})=>({
        title: 'User Details'
      
  
      

      });
    
update_details(){
  return fetch('https://lit-falls-96282.herokuapp.com/user/update_pic',
  {method: "PATCH",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: this.state.id, 
    location: this.state.location,
    hobby1:this.state.hobby1,
    hobby2: this.state.hobby2,
    hobby3:this.state.hobby3,
    club1:this.state.club1,
    club2:this.state.club2,
    club3:this.state.club3,
    pic: this.state.pic
  })
  })
  .then((response) => response.json())
  .then((res) => {
  
   // just setState here e.g.
   

   
    
      })
     .done();

}
    updatePic(){
   
    
  /*
      return fetch('https://lit-falls-96282.herokuapp.com/update_pic',
      {method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: this.state.id, 
        pic: this.state,pic
      })
      })
      .then((response) => response.json())
      .then((res) => {
      
       // just setState here e.g.
       
    
       
        
          })
         .done();
*/
        }
        


    

        constructor(props) {
          super(props);
        
        this.state = {
          loading: false,
          dp: null,
          id:global.id,
           email:global.email,
          username:'',
          location:'',
          hobby1:'',
          hobby2:'',
          hobby3:'',
          club1:'',
          club2:'',
          club3:'',
           pic:''
        }
      }


       openPicker(){
         this.setState({ loading: true })
         const Blob = RNFetchBlob.polyfill.Blob
         const fs = RNFetchBlob.fs
         window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
         window.Blob = Blob
         //const { uid } = this.state.user
         const uid = "12345"
         ImagePicker.openPicker({
           width: 300,
           height: 300,
           cropping: true,
           mediaType: 'photo'
         }).then(image => {
     
           const imagePath = image.path
     
           let uploadBlob = null
     
           const imageRef = firebase.storage().ref(uid).child("dp.jpg")
           let mime = 'image/jpg'
           fs.readFile(imagePath, 'base64')
             .then((data) => {
               //console.log(data);
               return Blob.build(data, { type: `${mime};BASE64` })
           })
           .then((blob) => {
               uploadBlob = blob;
      
               return imageRef.put(blob, { contentType: mime })
             })
             .then(() => {
               uploadBlob.close();
           
               return imageRef.getDownloadURL()
             })
             .then((url) => {
               this.setState({pic: url});
            
                       
               let userData = {}
               //userData[dpNo] = url
               //firebase.database().ref('users').child(uid).update({ ...userData})
     
               let obj = {}
               obj["loading"] = false
               obj["dp"] = url
               this.setState(obj)
               
                  return fetch('https://lit-falls-96282.herokuapp.com/user/update_pic',
               {method: "PATCH",
               headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                 id: this.state.id, 
                 location: this.state.location,
                 hobby1:this.state.hobby1,
                 hobby2: this.state.hobby2,
                 hobby3:this.state.hobby3,
                 club1:this.state.club1,
                 club2:this.state.club2,
                 club3:this.state.club3,
                 pic: this.state.pic
               })
               })
               .then((response) => response.json())
               .then((res) => {
               
                // just setState here e.g.
                
            
                
                 
                   })
                  .done();
             })
             .catch((error) => {
               console.log(error)
             })
         })
         .catch((error) => {
           console.log(error)
         })
       }
       
      
        componentDidMount() {

          return fetch('https://lit-falls-96282.herokuapp.com/users/' + this.state.email)
          .then((response) => response.json())
          .then((responseJson) => {
           // just setState here e.g.
           
          global.user= responseJson.username;
          global.id= responseJson._id;
        
          this.setState({id:responseJson._id})
          this.setState({username: responseJson.username});
          this.setState({location: responseJson.location});
          this.setState({hobby1: responseJson.hobby1});
          this.setState({hobby2: responseJson.hobby2});
          this.setState({hobby3: responseJson.hobby3});
          this.setState({club1: responseJson.club1});
          this.setState({club2: responseJson.club2});
          this.setState({club3: responseJson.club3});
          this.setState({pic: responseJson.pic});
          this.setState({dp: responseJson.pic});
         //  this.setState({ dataSource: responseJson,isLoading: false });
          })
          .catch((error) => {
            console.error(error);
          });


         }
      
    
  
      render() {
      
     
         
          const dpr = this.state.dp ? (<TouchableOpacity onPress={ () => this.openPicker() }>
        
          <Image
          style={{width: 100, height: 100, margin: 5}}
          source={{uri: this.state.dp}}
        /></TouchableOpacity>) : (<Button
       onPress={ () => this.openPicker() }
       title={ "Change Picture" }
     />)
  
     const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.container}>
       <View style={{flexDirection: "row"}}>
         { dpr }
       </View>
     </View>)
 
     return (
       <ScrollView>
       <View style={styles.container}>
          
         { dps }
         <View><Text>{this.state.username}</Text></View>
       <View style={styles.rw}>
    <Text>Location</Text>
    <TextInput style={styles.input}
    placeholder='location'
    placeholderTextColor='rgba(28,53,63, 1)'
    onChangeText={(location)=>this.setState({location})} value={this.state.location} 
    autoCapitalize = 'none'
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    underlineColorAndroid='transparent' pkaceholder='location'>
    </TextInput>
    </View>
    <View style={styles.rw}>
    <Text>Hobby1</Text>
    <TextInput style={styles.input}
    placeholder='hobby1'
    placeholderTextColor='rgba(28,53,63, 1)'
    onChangeText={(hobby1)=>this.setState({hobby1})} value={this.state.hobby1} 
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    autoCapitalize = 'none'
    underlineColorAndroid='transparent' pkaceholder='hobby1'>
    </TextInput>
    </View>
    <View style={styles.rw}>
    <Text>Hobby2</Text>
    <TextInput style={styles.input}
    placeholder='hobby2'
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    placeholderTextColor='rgba(28,53,63, 1)'
    onChangeText={(hobby2)=>this.setState({hobby2})} value={this.state.hobby2} 
    autoCapitalize = 'none'
    underlineColorAndroid='transparent' pkaceholder='hobby2'>
    </TextInput>
    </View>
    <View style={styles.rw}>
    <Text>Hobby3</Text>
    <TextInput style={styles.input}
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    placeholder='hobby3'
    placeholderTextColor='rgba(28,53,63, 1)'
    onChangeText={(hobby3)=>this.setState({hobby3})} value={this.state.hobby3} 
    autoCapitalize = 'none'
    underlineColorAndroid='transparent' pkaceholder='hobby3'>
    </TextInput>
    </View>
    <View style={styles.rw}>
    <Text>Club1</Text>
    <TextInput style={styles.input}
    placeholder='club1'
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    placeholderTextColor='rgba(28,53,63, 1)'
    onChangeText={(club1)=>this.setState({club1})} value={this.state.club1} 
    autoCapitalize = 'none'
    underlineColorAndroid='transparent' pkaceholder='club1'>
    </TextInput>
    </View>
    <View style={styles.rw}>
    <Text>Club2</Text>
   
    <TextInput style={styles.input}
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    placeholder='club2'
    placeholderTextColor='rgba(28,53,63, 1)'
    onChangeText={(club2)=>this.setState({club2})} value={this.state.club2} 
    autoCapitalize = 'none'
     underlineColorAndroid='transparent' pkaceholder='club2'>
    </TextInput>
</View>
    <View style={styles.rw}>
    <Text>Club3</Text>
   

    <TextInput style={styles.input}
    placeholder='club3'
    placeholderTextColor='rgba(28,53,63, 1)'
         returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
    onChangeText={(club3)=>this.setState({club3})} value={this.state.club3} 
    autoCapitalize = 'none'
    underlineColorAndroid='transparent' pkaceholder='club3'>
    </TextInput>
    </View>

    <Button title="Update Details"  onPress={() => this.update_details()}>
          
            </Button>
  
   
       </View>
    </ScrollView>
     );
   }
 }
 
 const styles = StyleSheet.create({
   rw:{
   flexDirection:'row'
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
   input:{
    fontSize:16,
    height:40,
    padding:10,
   width:200,
    marginBottom:10,
    backgroundColor:'rgba(255,255,255,1)'
},
 });
 