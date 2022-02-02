import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BiscoitoFechado from './src/biscoito.png'
import BiscoitoAberto from './src/biscoitoAberto.png'


const arrayFrase = [
	
		'A vida trará coisas boas se tiveres paciência.',
		'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
		'Não compense na ira o que lhe falta na razão.',
		'Defeitos e virtudes são apenas dois lados da mesma moeda.',
		'A maior de todas as torres começa no solo.',
		'Não há que ser forte. Há que ser flexível.',
		'Gente todo dia arruma os cabelos, por que não o coração?',
		'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
		'A juventude não é uma época da vida, é um estado de espírito.',
		'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
	
]



export default function App() {
	const [frases,setFrases] = useState('')
	const [img, setImg] = useState(BiscoitoFechado);

	const handleQuebraBiscoito = () => {
	  let numeroRandom = Math.floor(Math.random() * arrayFrase.length)
	  setFrases(`"${arrayFrase[numeroRandom]}"`)
	  setImg(BiscoitoAberto)
	}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image  
		  style={styles.img}
		  source={img}
	  />
	  <Text style={styles.textoFrase}>{frases}</Text>
	  <TouchableOpacity 
	  	style={styles.botao}
		onPress={handleQuebraBiscoito}
	  >
		  <View style={styles.btnArea}>
			  <Text style={styles.btntexto}>Quebrar Biscoito</Text>
		  </View>
	  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	alignItems:"center",
	justifyContent:"center"
  },
  img:{
	  width: 250,
	  height: 250,
  },
  textoFrase:{
	  fontSize:20,
	  color: "#dd7b22",
	  margin: 30,
	  fontStyle:"italic",
	  textAlign:"center"
  },
  botao:{
	  width: 230,
	  height: 50,
	  borderWidth:2,
	  borderColor:"#dd7b22",
	  borderRadius:25
  },
  btnArea:{
	  flex: 1,
	  flexDirection:"row",
	  justifyContent:"center",
	  alignItems:"center",
  },
  btntexto:{
	  fontSize:18,
	  fontWeight:"bold",
	  color:"#dd7b22"
  },
});
