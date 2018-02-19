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
 
  import React, { Component } from 'react';
    
  import { List, ListItem, SearchBar } from "react-native-elements";
    export default class View_New_Request extends Component {
        static navigationOptions = ({
            navigation})=>({
            title:'View New Challenge'
           
        
          });
          constructor(props) {
            super(props);
          
          this.state = {
              isLoading: true,
          description:'',
              challenge:'',
              dataSource:[]
            }
          }
  
decline(){

}
back(){

}
challenge_friend(item){


  return fetch('https://lit-falls-96282.herokuapp.com/cs/',
  {method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    challenger:global.user,
    challenged: item.friend,
   challenge: this.state.description,
   state:"1"
   
  })
  })
  .then((response) => response.json())
  .then((res) => {
  
   
      })
     .done();
    }




          componentDidMount() {
       //     const ziggeo = this.props.navigation;
     //       this.state.challenge = ziggeo.params ? ziggeo.params.id : "<undefined>";
         //   alert('challenge' +this.state.challenge);
        //    this.state.description = ziggeo.params ? ziggeo.params.description : "<undefined>";
        //     alert('description' + this.state.description);
        this.state.challenge=   global.z;
         this.state.description = global.description;
         alert('description' + this.state.description);

         fetch('https://lit-falls-96282.herokuapp.com/cs/get_challenge_states',
         {method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           user: global.user
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


             cf=()=>{
           
                this.props.navigation.navigate('Choose_Friend',{id:this.state.id});
             }

          view=()=>{
                var appToken = "r15ae15300147833b83403406cc336ca";
     Ziggeo.setAppToken(appToken);
    Ziggeo.play(this.state.challenge);
          }



        accept=()=>{
          
return fetch('https://lit-falls-96282.herokuapp.com/friend/updatefrreq/' + global.id,
{method: "PATCH",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  status: "2"
})
})
.then((response) => response.json())
.then((res) => {

 
    })
   .done();
  }
        
        
        decline=()=>{
            alert('decline?');
        }
    


      render() {
      
        return (
         
      //    <ImageBackground source={require('./home.png')}
    //      style={{flex:1,width:null,height:null}}> 
    
  
  
        
        <View style={styles.container}>
        <View><Text>{this.state.description}</Text></View>
            
       <View style={styles.content}>
         <View style={styles.inputContainer}>
       
      
          
           <Button  title="View" onPress={() => this.view()}/>
          
    
           <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
          data={this.state.dataSource}
          KeyExtractor={(x,i)=>i}
          renderItem={({item}) =>
    
<ListItem
    roundAvatar
   
    title={`${item.challenge} `}
    subtitle={`${item.challenger} `}
    >
  
      </ListItem>     
            }
            
            />
 </List>
        
           </View>
      </View>
      <Button  title="Accept" onPress={() => this.accept()}>
      
        </Button>
        <Button  title="Decline" onPress={() => this.decline()}>
      
        </Button>
        <Button  title="Back" onPress={() => this.back()}>
      
        </Button>

  </View>


 // </ImageBackground>
        );
      }
    }
    
    const styles = StyleSheet.create({
     
    });
    