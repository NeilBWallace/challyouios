import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,ScrollView
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import api from './api';
import React, { Component } from 'react';

  
  export default class UserPage extends Component {
    Search=()=>{
      this.props.navigation.navigate('Search');
    }
    UserSetup=()=>{
      this.props.navigation.navigate('UserSetup');
    }
    GetItem (item) {
      
     alert(item.club);
   
return fetch('https://lit-falls-96282.herokuapp.com/userhobbies',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  hobby: item.club

})
})
.then((response) => response.json())
.then((res) => {

 // just setState here e.g.

     alert(res.message);
   
    })
   .done();
  }
     
   
      constructor(props) {
        super(props);
      
      this.state = {
          isLoading: true,
          dataSource: [],
        }
      }
    
      componentDidMount() {
          return fetch('https://lit-falls-96282.herokuapp.com/clubs')
            .then((response) => response.json())
            .then((responseJson) => {
             // just setState here e.g.
    
              
             this.setState({ dataSource: responseJson,isLoading: false });
            })
            .catch((error) => {
              console.error(error);
            });
        }
    
  

    render() {
      return (
       
        <ImageBackground source={require('./home.png')}
        style={{flex:1,width:null,height:null}}> 
      


      
      <View style={styles.container}>
      
          
     <View style={styles.content}>
       <View style={styles.inputContainer}>
       <TouchableOpacity onPress={() => this.UserSetup()}>      
      <Text>
        User Setup
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.Search()}>      
      <Text>
        Search
        </Text>
        </TouchableOpacity>

        
      <FlatList
      data={this.state.dataSource}
      onPress={(item)=>{
        alert('item' + item)
        this.GetItem(item)
      }}
      KeyExtractor={(x,i)=>i}
      renderItem={({item}) =>
      <TouchableOpacity onPress={() => this.GetItem(item)}>      
      <Text>
        {item.club}
        </Text>
        </TouchableOpacity>
        
        }
        
        />
      
      
         </View>
    </View>
</View>
</ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  