import React,{useState} from "react";
import {View,Text,StyleSheet,Pressable,} from "react-native";
export default function App(){
  const [counter,setCounter]=useState(0);
   const [tap,setTap]=useState(0);
  const increment=()=>{
    setCounter(counter+1);
    totalCount();
  };
  const decrement=()=>{
    setCounter(counter-1);
    totalCount();
  };
  const totalCount=()=>{
    setTap(tap+1);
  };
  const reset=()=>{
   setCounter(0);
  };
  const resetTaps=()=>{
     setTap(0);
  };

  return(
<View style={styles.container}>
<Text style={styles.value}>The value of the counter is {counter} </Text>
<Text style={styles.total}>Total Taps = {tap}</Text>
<Pressable  style={styles.increment} onPress={increment}><Text style={{fontSize:20,left:50,top:10,}}>Increase</Text></Pressable>
<Pressable style={styles.decrement} onPress={decrement} ><Text style={{fontSize:20,left:50,top:10}}>Decrease</Text></Pressable>
<Pressable style={styles.reset} onPress={reset}><Text style={{fontSize:20,left:35}}>Reset</Text></Pressable>
<Pressable style={styles.resetTaps} onPress={resetTaps}><Text style={{fontSize:20,left:20,}}>Reset Taps</Text></Pressable>
 
</View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  increment:{
   backgroundColor:"red",
   borderRadius:10,width:150,height:50,
   top:100,margin:20,top:500,

  },
  decrement:{
     backgroundColor:"red",
   borderRadius:10,width:150,height:50,
   top:100,margin:20,top:410,left:200,

  },
  value:{
   fontSize:20,
   top:300,left:75,
  },
  reset:{
    backgroundColor:"red",
   borderRadius:10,width:150,height:50,
   top:100,margin:20,top:410,left:110,
  },
  resetTaps:{
backgroundColor:"red",
   borderRadius:10,width:150,height:50,
   top:100,margin:20,top:380,left:110,
  },
  total:{
    left:140,top:350,fontSize:15,
  },
})
