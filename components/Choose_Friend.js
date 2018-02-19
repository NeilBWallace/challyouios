import {
    Image,
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
    import { List, ListItem, SearchBar } from "react-native-elements";
    
  import React, { Component } from 'react';
    
    
    export default class Choose_Friend extends Component {
  
  //Choose a friend to challenge
      static navigationOptions = ({
        navigation})=>({
        title: 'Challenge Friend',
       
     
      });
  


      constructor(props) {
        super(props);
      
      this.state = {
          isLoading: true,
          dataSource: [],
          challenge:'',
          challenge_description: global.challengename
          
        }
      }



      componentDidMount() {
        const {state} = this.props.navigation;
        var name = state.params ? state.params.id : "<undefined>";

    this.state.challenge =name;
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
      cso=(item)=>{
      //challenge friend particular challenge

        return fetch('https://lit-falls-96282.herokuapp.com/cs',
        {method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          challenger:global.user,
          challenged:item.friend,
         challenge: this.state.challenge,
         challenge_description:this.state.challenge_description,
         ziggeo_id:global.ziggeo_id,
         state:"1"
        })
        })
        .then((response) => response.json())
        .then((res) => {
         // just setState here e.g.
          if(res.message=="undefined"){
            alert("Something went wrong. Please try again.");
          }else
          {
           alert('Your challenge has been sent to your friend');
          }
         
           })
           .done();
          }
                  
      

      
  
      render() {
        return (
       <View>
           <View>
             <Text>Challenge:{global.challengename}</Text>
             <Text>Choose one of your friends below to challenge</Text>
           </View>
           <View>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          
          <FlatList
          data={this.state.dataSource}
          onPress={(item)=>{
            alert('item' + item)
            this.GetItem(item)
          }}
          KeyExtractor={(x,i)=>i}
          renderItem={({item}) =>
     
            <ListItem
    roundAvatar
    onPress={() =>  this.cso(item)}
    title={`${item.friend} `}
    subtitle={item.friend}
   
    >
      
     
          </ListItem>

        
             }
            
            />
            </List>
         </View>
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
    