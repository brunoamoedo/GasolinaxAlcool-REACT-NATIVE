import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,TextInput,Modal,TouchableOpacity } from 'react-native';
import ModalResp from './src/Modal/index'


export default function App() {
  const [alcool,setAlcool] = useState(0)
  const [gasolina,setGasolina] = useState(0)
  const [resultado,setResultado] = useState(null)
  const [visible,setVisible] = useState(false)

   function verificaVazio(){
   if (alcool !== 0 || gasolina !==0){
     setResultado(alcool/gasolina)
     setVisible(true)
     }else{
     alert('Preencha os campos Vazios')
   }
   
  }

  

 return (
   <View style={estilo.container}>


      
      <View style={{marginTop:150}}>
        <Image
        source={require('./src/img/logo.png')}
        style={{width:150,height:150,borderRadius:25,marginLeft:20}}
        />
        <Text style={estilo.titulo}>Qual a melhor opção?</Text>
      </View>

      <View style={{flex:1,alignSelf:'center',marginTop:50}}>
        <Text style={estilo.titulo2}>Álcool(preço por litro)</Text>
        <TextInput
        placeholder='Ex:5.75'
        style={estilo.input}
        onChangeText={(item)=>setAlcool(item)}
        keyboardType='numbers-and-punctuation'
        /> 

        

        <Text style={estilo.titulo2}>Gasolina(preço por gasolina)</Text>
        <TextInput
        placeholder='Ex:8.75'
        style={estilo.input}
        onChangeText={(item)=>setGasolina(item)}
        keyboardType='numbers-and-punctuation'
        /> 

        <View style={estilo.btnArea}>
          <TouchableOpacity onPress={verificaVazio}>
            <Text style={estilo.btnTexto}>Calcular</Text>
          </TouchableOpacity>
        </View>

      </View>
      {visible?(
      <Modal transparent={false} visible={visible} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ModalResp gasolina={gasolina} alcool={alcool} resultado={resultado} fechar={()=>setVisible(false)}/>
      </Modal>):''}  
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#4F4F4F' 
  },
  titulo:{
    fontSize:20,
    color:'white',
    marginTop:10,
    fontWeight:'bold'
  },
  titulo2:{
    fontSize:16,
    color:'white',
    marginTop:30,
    fontWeight:'bold',
    marginLeft:5
  },
  input:{
  marginLeft:5,
  borderWidth:2,
  marginTop:10,
  width:'100%',
  backgroundColor:'white',
  borderColor:'white',
  borderTopRightRadius:5,
  borderTopStartRadius:5,
  borderBottomRightRadius:5,
  borderBottomStartRadius:5,
  height:40
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