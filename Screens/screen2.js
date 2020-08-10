import React from 'react';
import {
    View,
    Alert,
    FlatList,
    Dimensions,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    RefreshControl,
  } from 'react-native';
  


  class Screen2 extends React.Component {

    static navigationOptions = {
      title: 'Groups',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf:'center',
      },
      headerRight: () => (
        <TouchableOpacity
        onPress={() => alert('This is the edit button!')}>
          <Image style={{width:25,height:25}} source={require('../edit.png')}/>
        </TouchableOpacity> 
      ),
    };
    constructor(props) {
      super(props);
      this.state = {
        dataSource: [],
        requesting: 0,
        refreshing: false,
        loadMore: false,
        newPost: false,
      };
    }

    recherche = () =>(
      <View style={styles.rechercheContainer}>
        <Image style={styles.buttonIcon} source={require('../search.png')}/>
        <TextInput
          style={{height: 38, width:Dimensions.get('screen').width-90}}
          placeholder='Rechercher'
          />
      </View>
    );

    ligne = ()=>(
      <View style={styles.ligneContainer}>
        <Image style={styles.heroImage} source={require('../user.jpg')}/>
        <View style={{flex: 1,flexDirection:'column'}}>
          <View style={{flexDirection:'row',flex: 1}}>
            <Image style={{width:25,height:25}} source={require('../group_active.png')}/>
            <Text style={{}}> Vous dans le groupe</Text>
            <Text numberOfLines={1} style={{fontWeight:'bold',flex: 1}}> Team TalkMessenger</Text>
          </View>
          <View style={{flexDirection:'row-reverse'}}>
            <Text style={{alignSelf:'flex-start'}}>10 Mars 2020</Text>
          </View>
        </View>
      </View>
    );

    render() {
        return (
          <SafeAreaView >
            <ScrollView>
              <this.recherche/>
              <this.ligne/>
              <this.ligne/>
            </ScrollView>
            
          </SafeAreaView>
              );
        }
    
}

const styles = StyleSheet.create({
  rechercheContainer:{
    alignSelf:'center',
    flexDirection:'row',
    marginVertical:10,
    backgroundColor:'#C6BFBF',
    borderRadius:20,
    width:Dimensions.get('screen').width-60,
    height:40,
    alignItems:'center',
  },
  buttonIcon:{
    width:25,
    height:25,
    marginLeft:1
  },
  ligneContainer:{
    flex: 1,
    marginTop:5,
    alignSelf:'center',
    backgroundColor:'#f5f5f6',
    paddingBottom:30,
    borderBottomWidth:1,
    borderBottomColor:'#0E1112',
    flexDirection:'row',
    maxWidth:Dimensions.get('screen').width-20,
  },
  heroImage:{
    width:75,
    height:75,
    borderRadius:7,
  },

});

export default Screen2;  