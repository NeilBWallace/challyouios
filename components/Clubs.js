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
    
    
    export default class Clubs extends Component {
  
  
      static navigationOptions = ({
        navigation})=>({
        title: 'Clubs',
       
     
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
       
        this.setState({club1: responseJson.club1});
      this.setState({club2: responseJson.club2});
      this.setState({club3: responseJson.club3});
    
     //  this.setState({ dataSource: responseJson,isLoading: false });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
      render() {
        return (
      <View>
      <Text>{this.state.club1}</Text>
      <Text>{this.state.club2}</Text>
      <Text>{this.state.club3}</Text>
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
    