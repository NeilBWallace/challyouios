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
    
    export default class Challenges extends Component {
  
      
  
      static navigationOptions = ({
        navigation})=>({
        title: 'Challenges'
       
    
      });
  
      GetItem (item) {
      //  var appToken = "r15ae15300147833b83403406cc336ca";
      //  Ziggeo.setAppToken(appToken);
      //  Ziggeo.play(item.ziggeo_id);
  
  
   //     global.selectedviewmessage = item.sender;
    //    global.id = item._id;
    //    alert('ID' + global.id);
        this.props.navigation.navigate('View_Request',{id:item.ziggeo_id});
       }
  
       cso=(item)=>{
       
          this.props.navigation.navigate('Choose_Friend',{id:iten});
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
         
          <ImageBackground source={require('./home.png')}
          style={{flex:1,width:null,height:null}}> 
        
  
  
        
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
      title={`${item.name} `}
      subtitle={item.description}
     
      >
        
       
            </ListItem>
  
          }
          
          />
        </List>
           </View>
      </View>
  </View>
  </ImageBackground>
        );
      }
    }
    
    const styles = StyleSheet.create({
     
    });
    