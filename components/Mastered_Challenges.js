import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View,Button,FlatList
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  import Ziggeo from 'react-native-ziggeo-library';
import React, { Component } from 'react';
  
import { List, ListItem, SearchBar } from "react-native-elements";
  export default class Mastered_Challenges extends Component {
      static navigationOptions = ({
          navigation})=>({
          title:'Mastered Challenges'
         
      
        });
        constructor(props) {
          super(props);
        
        this.state = {
            isLoading: true,
        description:'',
            challenge:'',
            dataSource:[],
            ziggeo_id:''
          }
        }
 
  
  
        componentDidMount() {
     //     const ziggeo = this.props.navigation;
   //       this.state.challenge = ziggeo.params ? ziggeo.params.id : "<undefined>";
       //   alert('challenge' +this.state.challenge);
      //    this.state.description = ziggeo.params ? ziggeo.params.description : "<undefined>";
      //     alert('description' + this.state.description);
      
      fetch('https://lit-falls-96282.herokuapp.com/cs/get_challenge_states2',
      {method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:global.user,
       state:"4"
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


           view=(item)=>{
            
                this.props.navigation.navigate('View_Mastered_Challenge',{id:item._id,challenge:item.challenge,challenger:item.challenger,challenge_description:item.challenge_description,ziggeo_id:item.ziggeo_id});
              
          }


   
  


    render() {
    
      return (
       
    //    <ImageBackground source={require('./home.png')}
  //      style={{flex:1,width:null,height:null}}> 
  


      
      <View style={styles.container}>
      <View><Text>{this.state.description}</Text></View>
          
     <View style={styles.content}>
       <View style={styles.inputContainer}>
     
    
        
        
  
         <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
        data={this.state.dataSource}
        KeyExtractor={(x,i)=>i}
        renderItem={({item}) =>
  
<ListItem
  roundAvatar
  onPress={() =>  this.view(item)}
  title={`${item.challenge_description} `}
  subtitle={`${item.challenger} `}
  >

    </ListItem>     
          }
          
          />
</List>
      
         </View>
    </View>
 

</View>


// </ImageBackground>
      );
    }
  }
  
  const styles = StyleSheet.create({
   
  });
  