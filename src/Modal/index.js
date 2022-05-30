import React from 'react';
import { View,Modal,Image,Text,StyleSheet,TouchableOpacity } from 'react-native';

export default function ModalResp(props) {
  const gasolina = parseFloat(props.gasolina)
  const alcool= parseFloat(props.alcool)
 return (
   <View style={{flex:1,backgroundColor:'#4F4F4F',justifyContent:'flex-start',alignItems:'center'}}> 
      <Image
          source={require('../img/gas.png')}
          style={{width:150,height:150,borderRadius:25,marginLeft:20,marginTop:50}}
          />
          <Text style={{fontSize:25,fontWeight:'bold',color:'#00FF00',marginTop:20}}>Compensa usar: {props.resultado>0.70?'Gasolina':'Alcool'}!</Text> 
          <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Com os preços:</Text>
          <Text style={{fontSize:16,fontStyle:'italic',marginTop:20,color:'#DCDCDC'}}>Álcool: R$ {alcool.toFixed(2)}</Text>
          <Text style={{fontSize:16,fontStyle:'italic',marginTop:20,color:'#DCDCDC'}}>Gasolina: R$ {gasolina.toFixed(2)}</Text>

        <View style={modalStyle.btnArea}>
          <TouchableOpacity onPress={props.fechar}>
            <Text style={modalStyle.btnTexto}>Calcular novamente!</Text>
          </TouchableOpacity>
        </View>

   </View>
  );
}

const modalStyle = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnArea:{
    alignSelf:'center',
    marginTop:70,
    marginLeft:10,
    borderWidth:2,
    width:'100%',
    height:30,
    backgroundColor:'red',
    borderColor:'red'
   },
   btnTexto:{
     fontSize:18,
     fontWeight:'bold',
     color:'white',
     alignSelf:'center',
     paddingTop:2
   }
})