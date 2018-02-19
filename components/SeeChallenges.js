import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,Button
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import Ziggeo from 'react-native-ziggeo-library';
import React, { Component } from 'react';
import { List, ListItem, SearchBar } from "react-native-elements";
  
  export default class SeeChallenges extends Component {
//See the challenges I have recorded

    static navigationOptions = ({
      navigation})=>({
      title: 'My Challenges'
     
  
    });

 

     cso=(item)=>{
        global.challengename= item.description;
        global.ziggeo_id= item.ziggeo_id;
        //Choose a friend to challenge this challenge
        this.props.navigation.navigate('Choose_Friend',{id:item._id});
     }




    componentDidMount() {
      
       return fetch('https://lit-falls-96282.herokuapp.com/challenges/get_challenges',
       {method: "POST",
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
      id:global.id
    
      })
     })
       .then((response) => response.json())
       .then((res) => {
         this.setState({ dataSource: res,isLoading: false });
         
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
    render() {
      return (
       
     

      
      <View style={styles.container}>
      
          
     <View style={styles.content}>
       <View style={styles.inputContainer}>
         <Text>Select one of your challenges</Text>
       <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
   
       <FlatList
      data={this.state.dataSource}
    
      KeyExtractor={(x,i)=>i}
      renderItem={({item}) =>
 
            <ListItem
    roundAvatar
    onPress={() =>  this.cso(item)}
    title={`${item.description} `}
    subtitle={item.description}
   
    >
      
     
          </ListItem>

        }
        
        />
      </List>
         </View>
    </View>
</View>

      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  