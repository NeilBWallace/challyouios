import {
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
      Platform,
      StyleSheet,
      Text,
      View,
      FlatList
    } from 'react-native';
    import {StackNavigator} from  'react-navigation';
    import { List, ListItem, SearchBar } from "react-native-elements";
  import React, { Component } from 'react';
    
    
    export default class Messages extends Component {
  
  
      static navigationOptions = ({
        navigation})=>({
        title: global.user + "'s Messages",
       
     
      });
  
      constructor(props) {
        super(props);
      
      this.state = {
          isLoading: true,
          dataSource: [],
        }
      }

      componentDidMount() {
     
      return fetch('https://lit-falls-96282.herokuapp.com/friend/get_friends',
      {method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: global.user,
        status:"2"
      })
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({ dataSource: res,isLoading: false });
       
          })
         .done();
        }
            
    
  GetItem (item) {
 global.selecteduser=item.sender;
 this.props.navigation.navigate('View_Request');
}
  



      render() {
        return (
      
       
    
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
          data={this.state.dataSource}
          KeyExtractor={(x,i)=>i}
          renderItem={({item}) =>
         
<ListItem
    roundAvatar
    onPress={() =>  this.GetItem(item)}
    title={`${item.sender} `}
    subtitle={`is requesting to be your friend`}
    >
  
      </ListItem>     
            }
            
            />
 </List>

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
    