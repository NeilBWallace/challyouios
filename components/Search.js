import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import { List, ListItem, SearchBar } from "react-native-elements";
import React, { Component } from 'react';
  
  
  export default class Search extends Component {


    static navigationOptions = ({
      navigation})=>({
      title: 'Search for friends' 
     
  
    });


    constructor(props) {
      super(props);
    
    this.state = {
        isLoading: true,
        dataSource: [],
      }
    }
  
    See_User(item) {
      
 
     global.selecteduser = item.email
     this.props.navigation.navigate('See_User') ;
    
    }



    
    componentDidMount() {
      return fetch('https://lit-falls-96282.herokuapp.com/users')
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
       
       
      


      
      <ScrollView style={styles.container}>
      
          
     <View style={styles.content}>
     <View>
     <Text>Search</Text>
     </View>
     
     <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
    <FlatList
    data={this.state.dataSource}
    onPress={(item)=>{
    
      this.GetItem(item)
    }}
    KeyExtractor={(x,i)=>i}
    renderItem={({item}) =>
    <ListItem
    roundAvatar
    onPress={() => this.See_User(item)}
    title={`${item.username} `}
    avatar={{ uri: item.pic }}
    >
    <TouchableOpacity onPress={() => this.See_User(item)}>      
   
      </TouchableOpacity>
      </ListItem>
      }
      
      />
    </List>
  
    </View>

</ScrollView>

      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  