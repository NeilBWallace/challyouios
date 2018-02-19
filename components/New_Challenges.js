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
    
    export default class New_Challenges extends Component {
  
      //View New Challenges sent to me.
  
      static navigationOptions = ({
        navigation})=>({
        title: 'My Challenges'
       
    
      });
  
      GetItem (item) {
      //  var appToken = "r15ae15300147833b83403406cc336ca";
      //  Ziggeo.setAppToken(appToken);
      //  Ziggeo.play(item.ziggeo_id);
  
  
   //     global.selectedviewmessage = item.sender;
  
  
   this.props.navigation.navigate('View_New_Challenge',{id:item._id,challenge:item.challenge,challenger:item.challenger,challenge_description:item.challenge_description,ziggeo_id:item.ziggeo_id});
  }
  
    
  
  
  
      componentDidMount() {
        
         return fetch('https://lit-falls-96282.herokuapp.com/cs/get_challenge_states',
         {method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
       user:global.user,
       state:"1"
      
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
       
         <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
     
         <FlatList
        data={this.state.dataSource}
      
        KeyExtractor={(x,i)=>i}
        renderItem={({item}) =>
   
              <ListItem
      roundAvatar
      onPress={() =>  this.GetItem(item)}
      title={`${item.challenge_description} `}
      subtitle={item.challenger}
     
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
    