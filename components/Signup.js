import React, {Component} from 'react';
import {Keyboard,ScrollView,AsyncStorage,TextInput,List,FlatList,TouchableOpacity,Button,AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight,Image} from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';


export default class Signup extends Component{

    static navigationOptions = ({
        navigation})=>({
        title: 'Sign Up'
      
  
      

      });
    

      More(user){
        navigate('More');
       }

   Home(user){
        navigate('Home');
       }
   
       login=()=>{
        


return fetch('https://lit-falls-96282.herokuapp.com/user/signup',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  username:this.state.username,
  email: this.state.email, 
  password: this.state.password, 
  location:'',
  hobby1:'',
  hobby2:'',
  hobby3:'',
  club1:'',
  club2:'',
  club3:'',
  pic:''
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



    constructor(props) {
        super(props);
      
      this.state = {
        username:'',
         email:'',
         password:'',
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
    
      componentDidMount() {
        
        }
    

    render(){
        const { navigate } = this.props.navigation;

      

        return(
           
    
          <Image source={require('./signup.png')}
          
            style={styles.backgroundImage}> 
          
      
       
           
          <View style={styles.container}>
      
          
     <View style={styles.content}>
        <View style={styles.inputContainer}>
            <TextInput 
                   returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
            placeholderTextColor='rgba(28,53,63, 1)'
            autoCapitalize = 'none'
            style={styles.input}
            placeholder='email'
            onChangeText={(email)=>this.setState({email})} value={this.state.email} underlineColorAndroid='transparent' pkaceholder='enail'>
            </TextInput>

            <TextInput 
                   returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
            placeholderTextColor='rgba(28,53,63, 1)'
            autoCapitalize = 'none'
            style={styles.input}
            placeholder='Username'
            onChangeText={(username)=>this.setState({username})} value={this.state.username} underlineColorAndroid='transparent' pkaceholder='username'>
            </TextInput>


            <TextInput style={styles.input}
                   returnKeyType="done"
       onSubmitEditing={Keyboard.dismiss}
            placeholder='password'
            placeholderTextColor='rgba(28,53,63, 1)'
            onChangeText={(password)=>this.setState({password})} value={this.state.password} 
            autoCapitalize = 'none'
            secureTextEntry={true} underlineColorAndroid='transparent' pkaceholder='password'>
            </TextInput>
        
            <Button title="Sign up"  onPress={() => this.login()}>
          
            </Button>
             </View>

        </View>

</View>
   




  




    </Image>
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
      justifyContent: 'center', 
flex:1
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


},



      fullWidthButton: {
        backgroundColor: 'blue',
        height:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

      fullWidthButton2: {
        backgroundColor: 'green',
        height:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },

      
      fullWidthButtonText: {
        fontSize:24,
        color: 'white'
       
      },
    
    
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('Signup', () => Signup);
  