import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}> 
      <View style={styles.box}>
        <Text style={styles.title}> Hello World! </Text>
        <Text style={styles.subtitle}> Hey! I'm Daniel 😀</Text>
        <Image  style= {styles.picture} source={{ uri: "https://img.yqqlm.com/index/index/getInterUrl?uicrIvZQ=3e407f6a23bc63ae87e6362da509592c" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'orange',
    padding: 8,
  },
  title:{
    color:'white',
    fontSize:30,
    fontFamily: 'helvetica',
    textAlign: 'center',
    fontWeight: 'bold',
    padding:20,
  },
  subtitle:{
    color:'white',
    fontSize:20,
    fontFamily: 'helvetica',
    textAlign: 'center',

  },
  box:{
    backgroundColor:'black',
    borderRadius:10,
    paddingBottom:20,
  },
  picture:{
    width:300,
    height:200,
    borderRadius:30,
    alignSelf:'center',
    marginTop:30
    
  }
});
