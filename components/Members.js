import {
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import {StackNavigator} from  'react-navigation';
  
import Badge from 'react-native-smart-badge'
import IconBadge from 'react-native-icon-badge';
import React, { Component } from 'react';
  
  
  export default class Members extends Component {


    static navigationOptions = ({
      navigation})=>({
      title: 'Home Page',
     
      headerRight:
      <View style={styles.rw}>
  
      <TouchableOpacity style={{margin:10,padding:10}} onPress={()=>navigation.navigate("UserSetup")}>
      
      <Image style={{width: 40, height: 40}}  source={require('./user_config.png')}>
           </Image>
     </TouchableOpacity>
        </View>
    });
    messages=()=>{
      this.props.navigation.navigate('Messages');
    }
    user_config=()=>{
      this.props.navigation.navigate('UserSetup');
    }
    search=()=>{
      this.props.navigation.navigate('Search');
    }

    challenge=()=>{
     // record a challenge
       this.props.navigation.navigate('Describe_Challenge');
    }
    challenges=()=>{
      //see my challenges I have recorded
      this.props.navigation.navigate('SeeChallenges');
    }

    userPage=()=>{
      this.props.navigation.navigate('UserPage');
    }

    friends=()=>{
      this.props.navigation.navigate('Friends',{dataSource:this.state.dataSource});
    }

    mastered_challenge=()=>{
      this.props.navigation.navigate('Mastered_Challenges');
    }
  open_challenge=()=>{
      this.props.navigation.navigate('Open_Challenges');
    }

   clubs=()=>{
      this.props.navigation.navigate('Clubs');
    }

   hobbies=()=>{
      this.props.navigation.navigate('Hobbies');
    }

           
      
      
            get_users(){
            fetch('https://lit-falls-96282.herokuapp.com/users/' + this.state.email)
            .then((response) => response.json())
            .then((responseJson) => 
          
            {
             // just setState here e.g.
             
            global.user= responseJson.username;
            global.id= responseJson._id;
          
            this.setState({id:responseJson._id})
            this.setState({username: responseJson.username});
            this.setState({location: responseJson.location});
            this.setState({hobby1: responseJson.hobby1});
            this.setState({hobby2: responseJson.hobby2});
            this.setState({hobby3: responseJson.hobby3});
            this.setState({club1: responseJson.club1});
            this.setState({club2: responseJson.club2});
            this.setState({club3: responseJson.club3});
            this.setState({pic: responseJson.pic});
      
           //  this.setState({ dataSource: responseJson,isLoading: false });
            }).then(()=>{
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
                  var count = Object.keys(res).length;
               
                  this.setState({friendsCount:count});
                
                  this.setState({ dataSource: res,isLoading: false });
                }
              
                 })
                .done();
        
            }).then(()=>{

              fetch('https://lit-falls-96282.herokuapp.com/cs/get_challenge_states2',
              {method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                user:global.user,
               state:"2"
              })
              })
              .then((response) => response.json())
              .then((res) => {
               // just setState here e.g.
                if(res.message=="undefined"){
                  alert("Something went wrong. Please try again.");
                }else
                {
                  var count = Object.keys(res).length;
               
                  this.setState({openChallengesCount:count});
                
          
                }
              
                 })
                .done();
            }).then(()=>{
              
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
                  var count = Object.keys(res).length;
               
                  this.setState({completedChallengesCount:count});
                
          
                }
              
                 })
                .done();

              }).then(()=>{
          // .catch((error) => {
          //    console.error(error);
          //  })

       
          fetch('https://lit-falls-96282.herokuapp.com/cs/get_challenge_states2',
          {method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user:global.user,
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
              var count = Object.keys(res).length;
           
              this.setState({newChallengesCount:count});
            
      
            }
          
          }).done();

          
              }).then(()=>{
                // .catch((error) => {
                //    console.error(error);
                //  })
      
             
                fetch('https://lit-falls-96282.herokuapp.com/friend/get_request',
                {method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  sendee:global.user,
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
                    var count = Object.keys(res).length;
                 
                    this.setState({newFriendRequestCount:count});
                  
            
                  }
                
                }).done();
      
                
                    }).done();
            
            
            
            
      
      
      
      
            }
    componentWillMount() {


  return this.get_users();

    }






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
       friendsCount:'',
       openChallengesCount:'',
       completedChallengesCount:'',
       newChallengesCount:'',
       newFriendRequestCount:''
    }
  }

    render() {
      
    //  alert('email' + this.state.email);
      return (
        <Image source={require('./home.png')}
        style={{flex:1,width:null,height:null,resizeMode: 'stretch'}}> 
     
     <View style={styles.cont}>
         <View style={styles.content1}>
        
 
        
          <TouchableOpacity  onPress={() => this.search()}>
          <Image style={{width: 40, height: 40}}  source={require('./search.png')}>
           </Image>
           </TouchableOpacity>

           <TouchableOpacity style={{margin:10,padding:10}} onPress={()=> this.props.navigation.navigate("New_Challenges")}>
           
         <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
  <IconBadge
    MainElement={
      <View style={{
        width:10,
        height:10,
        margin:6
      }}/>
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>  {this.state.newChallengesCount}</Text>
    }
    IconBadgeStyle={
    
      {width:20,
      height:20,
      backgroundColor: '#FF00EE'}}
    
    Hidden={this.state.newChallengesCount==0}
    />
</View>
    </TouchableOpacity>




           <TouchableOpacity  onPress={() => this.messages()}>
          <Image style={{width: 40, height: 40}}  source={require('./th.jpg')}>
           
         <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
  <IconBadge
    MainElement={
      <View style={{
        width:10,
        height:10,
        margin:6
      }}/>
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>  {this.state.newFriendRequestCount}</Text>
    }
    IconBadgeStyle={
    
      {width:20,
      height:20,
      backgroundColor: '#FF00EE'}}
    
    Hidden={this.state.newFriendRequestCount==0}
    />
</View>
   
           </Image>
           </TouchableOpacity>
   
           </View>
           <View style={{ alignItems:'center'}} >  
     
        <Image
        style={{width: 150, height: 150, marginTop: 75 }}
        source={{uri: this.state.pic}}
      />
      <Text style={styles.header}>{this.state.username}</Text>
      </View>

      <View style={styles.content1}>
     

      <TouchableOpacity  onPress={() => this.hobbies()}>
       <Image style={{width: 40, height: 40}} source={require('./hobbies.png')}>
       </Image>
        </TouchableOpacity>
    
     
         <TouchableOpacity  onPress={() => this.friends()}>
       <Image style={{width: 40, height: 40}}  source={require('./friend.png')}>
       </Image>
        </TouchableOpacity>
    

        <TouchableOpacity  onPress={() => this.clubs()}>
       <Image style={{width: 40, height: 40}}  source={require('./clubs.png')}>
       </Image>
        </TouchableOpacity>
         </View>

         <View style={styles.content1}>
        <Text style={styles.t}>Likes</Text>
        <Text style={styles.t}>Friends</Text>
        <Text style={styles.t}>Clubs</Text>
        </View>
 
        <View style={styles.content1}>
        <Text style={styles.t}>3</Text>
        <Text style={styles.t} >{this.state.friendsCount}</Text>
        <Text style={styles.t}>3</Text>
        </View>
         <View style={styles.content1}>

<TouchableOpacity  onPress={() => this.open_challenge()}>
       <Image style={{width: 40, height: 40}} source={require('./open_challenges.png')}>
       </Image>
        </TouchableOpacity>


        <TouchableOpacity  onPress={() => this.mastered_challenge()}>
       <Image style={{width: 40, height: 40}} source={require('./managed_challenges.png')}>
       </Image>
        </TouchableOpacity>

        <TouchableOpacity  >
       <Image style={{width: 40, height: 40}} source={require('./location.png')}>
       </Image>
        </TouchableOpacity>
       

         </View>
      
         <View style={styles.content1}>
        <Text>Open Challenges</Text>
        <Text>Mastered Challenges</Text>
        <Text>Location</Text>
        </View>
        <View style={styles.content1}>
        <Text>{this.state.openChallengesCount}</Text>
        <Text>{this.state.completedChallengesCount}</Text>
        <Text>{this.state.location}</Text>
        </View>

    



  
            
</View>

<View style={{position: 'absolute', left: 0, right: 0, bottom: 3}}>
          <View style={styles.content1}>
        <TouchableOpacity  onPress={() => this.challenge()}>
       <Image style={{width: 40, height: 40}}  source={require('./challenge_so.png')}>
       </Image>
        </TouchableOpacity>
  
        <TouchableOpacity  onPress={() => this.challenges()}>
        <Image style={{width: 40, height: 40}} source={require('./see_challenges.png')}>
        </Image>
        </TouchableOpacity>
            </View>
          
          </View>


      
       
       </Image>
      );
    }
  }
  const styles = StyleSheet.create({
    t:{
      alignItems:'center',
  
      justifyContent:'center'
    },
    rw:{
      flexDirection:'row'
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
     alignItems:'center',
     marginLeft:10,
     marginRight:10
   },
   content2:{
    justifyContent:'space-between',
    flexDirection:'row',

   alignItems:'flex-end',
    marginLeft:10,
    marginRight:10,
  marginBottom:5
  }
  });
  