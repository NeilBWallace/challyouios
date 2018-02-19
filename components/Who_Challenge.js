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
    
  import React, { Component } from 'react';
    
    
    export default class Who_Challenge extends Component {
  
  
      static navigationOptions = ({
        navigation})=>({
        title: 'Friends',
       
     
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

  
      render() {
        return (
      
    

          <FlatList
          data={this.state.dataSource}
          onPress={(item)=>{
            alert('item' + item)
            this.GetItem(item)
          }}
          KeyExtractor={(x,i)=>i}
          renderItem={({item}) =>
          <TouchableOpacity onPress={() => this.GetItem(item)}>      
          <Text>
            {item.sender}{item.sendee} 
            </Text>
            </TouchableOpacity>
            
            }
            
            />
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
    