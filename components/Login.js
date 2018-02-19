import {
    ImageBackground,
    AsyncStorage,TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Keyboard
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import PropTypes from 'prop-types';
import React, { Component } from 'react';


  export default class Login extends Component {

    constructor(props) {
        super(props);
      
      this.state = {
         email:'',
         password:'',
         id:''
        }
    }
    static navigationOptions = ({
        navigation})=>({
        title: 'Challenge You',
        headerRight:
        <TouchableOpacity style={{backgroundColor:'orange',margin:10,padding:10}} onPress={()=>navigation.navigate("Signup")}><Text style={{color:'#ffffff'}}>Signup</Text>
       </TouchableOpacity>
      });
    

    componentDidMount() {
   //     this._loadInitialState().done();
    
     //   _loadInitialState=async()=>{
   //        var value = await AsyncStorage.getIten('email');
   //        if(value !== null){
   //          this.props.navigation.navigate('Home');
   //        }
    //    }
    }
 
GetDetails(){

global.email = this.state.email;
global.id=this.state.id;


}
    login=()=>{
   
   
   
return fetch('https://lit-falls-96282.herokuapp.com/user/login',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  email: this.state.email, 
  password: this.state.password, 
})
})
.then((response) => response.json())
.then((res) => {

 // just setState here e.g.
   if(res.message == "Login successful"){
    alert(res.message);
    this.GetDetails();
     var email=res.message;
     AsyncStorage.setItem('email',email);
     this.props.navigation.navigate('Members');
   
    }
   else
   {
   alert( res.message);
  
   }
    })
   .done();
  }
      
  

    render() {
   
         return (
      
        <ImageBackground source={require('./login.png')}
      
        style={styles.backgroundImage}> 
      


      
      <View style={styles.container}>
      
          
     <View style={styles.content}>
       <View style={styles.inputContainer}>
        <TextInput onChangeText={(email)=>this.setState({email})} value={this.state.email} underlineColorAndroid='transparent' pkaceholder='enail'
          autoCapitalize = 'none' 
        placeholderTextColor='rgba(28,53,63, 1)'
        placeholder='email'
            returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}

        style={styles.input}>
    
        </TextInput>
        <TextInput 
              placeholderTextColor='rgba(28,53,63, 1)'
              placeholder='password'
              autoCapitalize = 'none'
              style={styles.input}
          returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
        onChangeText={(password)=>this.setState({password})} value={this.state.password} 
        
        secureTextEntry={true} underlineColorAndroid='transparent' pkaceholder='password'>
        </TextInput>
        <Button  title="Login" onPress={() => this.login()}>
      
        </Button>
         </View>
    </View>
</View>
</ImageBackground >
    );
}
}

  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'stretch'
  },

  container:{
    flex:1,
  
    justifyContent: 'center',
        },
    content:{
      alignItems:'center',
      justifyContent: 'center'
      
    },
    input:{
        fontSize:16,
        height:40,
        padding:10,
        marginBottom:10,
        backgroundColor:'rgba(255,255,255,1)'
    },
    
    
    inputContainer: {
    margin:20,
    marginBottom:0,
    padding:20,
    paddingBottom:10,
    alignSelf:'stretch',
    borderWidth:1,
    borderColor:'#fff',
    backgroundColor:'rgba(255,255,255,0.2)'
    
    
    }
    
    
  });
  