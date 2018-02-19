import {
    ImageBackground,
    TextInput,
    TouchableOpacity,
      Platform,
      StyleSheet,
      Text,
      View,
      FlatList,
      Button,
      Image
    } from 'react-native';
    import {StackNavigator} from  'react-navigation';
    
  import React, { Component } from 'react';
    
    
    export default class See_User extends Component {
      static navigationOptions = ({
        navigation})=>({
        title: 'Friend Profile' 
       
    
      });




      constructor(props) {
        super(props);
      
      this.state = {
          username: '',
          location:'',
          hobby1:'',
          hobby2:'',
          hobby3:'',
          club1:'',
          club2:'',
          club3:'',
          pic:'',
          isLoading: true,
          dataSource: [],
        }
      }
    
   
        

      sendfriendrequest=()=>{
        

return fetch('https://lit-falls-96282.herokuapp.com/friend',
{method: "POST",
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  sender: global.user,
  sendee: this.state.username, 
  status:"1"
})
})
.then((response) => response.json())
.then((res) => {
 // just setState here e.g.
  if(res.message=="undefined"){
    alert("Something went wrong. Please try again.");
  }else
  {
   alert(res.message);
  }

   })
   .done();
  }

    
      

      
      componentDidMount() {
         
        return fetch('https://lit-falls-96282.herokuapp.com/users/name/' + global.selecteduser)
          .then((response) => response.json())
          .then((responseJson) => {
           // just setState here e.g.
                     this.setState({ username: responseJson.username });
                     this.setState({ location: responseJson.location });
                     this.setState({ hobby1: responseJson.hobby1 });
                     this.setState({ hobby2: responseJson.hobby2 });
                     this.setState({ hobby3: responseJson.hobby3 });
                     this.setState({ club1: responseJson.club1 });
                     this.setState({ club2: responseJson.club2 });
                     this.setState({ club3: responseJson.club3 });
                     this.setState({ pic: responseJson.pic });

    
          })
          .catch((error) => {
            console.error(error);
          });
      }
      render() {
        return (
          <View style={styles.cont}>
  <View style={{ alignItems:'center'}} >  
     
        <Image
        style={{width: 150, height: 150, marginTop: 75 }}
        source={{uri: this.state.pic}}
      />
      <Text style={styles.header}>{this.state.username}</Text>
      </View>

<View style={styles.m}>
  <Text style={{fontWeight: 'bold'}} >Location</Text>
  <Text>{this.state.location} </Text>
  <Text style={{fontWeight: 'bold'}} >Hobbies</Text>
  <Text>{this.state.hobby1},{this.state.hobby2},{this.state.hobby3} </Text>
  <Text style={{fontWeight: 'bold'}}>Clubs</Text>
  <Text>{this.state.club1} </Text>
  <Text>{this.state.club2} </Text>    
  <Text>{this.state.club3} </Text>   
 
<View style={styles.mm}>
  <Button style={styles.mm} title="Back" onPress={() => this.props.navigation.goBack(null)}>
      
        </Button>
</View>


        </View>
  </View>

        );
      }
    }
    
    const styles = StyleSheet.create({
     mm:{
       margin:20
     },
      m:{
   margin:10,
   justifyContent:'center',
   alignItems:'center'
      },
      cont:{
       
        flexDirection:'column'
      },
      c1:{
       justifyContent:'flex-start'
      },
      c2:{
        alignItems:'center'
      },
      c3:{
        alignItems:'flex-end'
      },
      header:{
        fontSize : 25
       
      },
      container:{
        justifyContent:'space-between',
        flexDirection:'column'
      },
      content2:{
        justifyContent:'space-between',
        height:20,
        alignItems:'center'
      },
     content1:{
       justifyContent:'space-between',
       flexDirection:'row',
       alignItems:'center'
     }
    });
    
    