import {
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  
import React, { Component } from 'react';
  
  
  export default class Hobbies extends Component {


    static navigationOptions = ({
      navigation})=>({
      title: 'Hobbies',
     
   
    });




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






    componentDidMount() {
      
    return fetch('https://lit-falls-96282.herokuapp.com/users/' + this.state.email)
    .then((response) => response.json())
    .then((responseJson) => {
     // just setState here e.g.
     
      this.setState({hobby1: responseJson.hobby1});
    this.setState({hobby2: responseJson.hobby2});
    this.setState({hobby3: responseJson.hobby3});
  
   //  this.setState({ dataSource: responseJson,isLoading: false });
    })
    .catch((error) => {
      console.error(error);
    });
  }

    render() {
      return (
    <View>
    <Text>{this.state.hobby1}</Text>
    <Text>{this.state.hobby2}</Text>
    <Text>{this.state.hobby3}</Text>
    </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container:{
      justifyContent:'space-between',
      flexDirection:'column'
    },
    content2:{
      height:20,
      alignItems:'center'
    },
   content1:{
     justifyContent:'space-between',
     flexDirection:'row'
   }
  });
  