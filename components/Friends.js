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
    
    
    export default class Friends extends Component {
  
  
      static navigationOptions = ({
        navigation})=>({
        title: 'Friends',
       
     
      });
  


      constructor(props) {
        super(props);
      
      this.state = {
       
        id:'',
         email:global.email,
        username:'',
        location:'',
        hobby1:'',
        hobby2:'',
        hobby3:'',
        club1:'',
        club2:'',
        club3:'',
         pic:'',
         dataSource:[],
         friendsCount:''
      }
    }
  


      componentDidMount() {
        fetch('https://lit-falls-96282.herokuapp.com/friend/get_friends',
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
         // just setState here e.g.
          if(res.message=="undefined"){
            alert("Something went wrong. Please try again.");
          }else
          {  
            
    
    
            this.setState({ dataSource: res,isLoading: false });
          }
        
           })
          .done();
  
  }
  see_friend=(item)=>{
   
    global.selecteduser=item.friend;
    this.props.navigation.navigate('See_User_Name');
    

  }


      user_config=()=>{
        this.props.navigation.navigate('UserSetup');
      }
      search=()=>{
        this.props.navigation.navigate('Search');
      }
  
      challenge=()=>{
        this.props.navigation.navigate('ChallengeSO');
      }
      challenges=()=>{
        this.props.navigation.navigate('SeeChallenges');
      }
  
      userPage=()=>{
        this.props.navigation.navigate('UserPage');
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
    onPress={() => this.see_friend(item)}
    title={`${item.friend} `}
 
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
    