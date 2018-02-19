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

  //View specific open Challenge
    export default class View_Mastered_Challenge extends Component {
        static navigationOptions = ({
            navigation})=>({
            title:'View Mastered Challenge'
           
        
          });
          constructor(props) {
            super(props);
            var a =this.props.navigation.state.params.id;
       
          this.state = {
              isLoading: true,
              id:a,
              challenger:this.props.navigation.state.params.challenger,
              challenged:'',
              challenge:'',
              challenge_description:this.props.navigation.state.params.challenge_description,
              state:'',
              ziggeo_id:this.props.navigation.state.params.ziggeo_id
            }
          }


          componentDidMount() {
          
         //   alert('challenge' +this.state.challenge);
        //    this.state.description = ziggeo.params ? ziggeo.params.description : "<undefined>";
        //     alert('description' + this.state.description);
     
     
   




             }


           

          view=()=>{
                var appToken = "r15ae15300147833b83403406cc336ca";
     Ziggeo.setAppToken(appToken);
     Ziggeo.play(this.state.ziggeo_id);
          }



     
        

      render() {
      
        return (
         
      //    <ImageBackground source={require('./home.png')}
    //      style={{flex:1,width:null,height:null}}> 
    
  
  
        
        <View style={styles.container}>
        <View><Text>{this.state.description}</Text></View>
            
       <View style={styles.content}>
         <View style={styles.inputContainer}>
         <View><Text>Challenger:{this.state.challenger}</Text></View>
     
           <View><Text>Challenge:{this.state.challenge_description}</Text></View>
      
          
           <Button  title="View" onPress={() => this.view()}/>
        
      
        <Button  title="Back" onPress={() => this.back()}>
      
        </Button>

        
           </View>
      </View>
    
   
  </View>


 // </ImageBackground>
        );
      }
    }
    
    const styles = StyleSheet.create({
     
    });
    