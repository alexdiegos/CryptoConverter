import React, { useState } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ButtonGroup } from '@rneui/base'

const App = () => {
  const buttons = ['BTC -> R$', 'R$ -> BTC']
  const [cryptoToReal, setCrypto] = useState('');
  const [amount, setAmount] = useState('');
  const [typeConvert, setTypeConvert] = useState(0);
  const [resultado, setResultado] = useState('');

  const updateIndex = (selectedIndex) => {
    setTypeConvert(selectedIndex)
  }

  const calculate = () => {
    const tempCrypto = parseFloat(cryptoToReal);
    const tempAmount = parseFloat(amount);

    if (typeConvert == 0) {
      setResultado('R$ ' + tempAmount * tempCrypto);
    } else {
      setResultado(tempAmount/tempCrypto + ' BTC');
    }
  }

  return (
    <ImageBackground
      style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
      source={{ uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/398/647/products/c030-lilas1-be2db3fe2041740a3216216425263099-1024-1024.jpg' }}>

      <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold', padding:10 }}>Crypto Converter</Text>

      <Image 
        source={{uri: 'https://influencermarketinghub.com/wp-content/uploads/2022/06/Top-cryptocurrency-converter-tools-to-easily-convert-to-fiat.png'}} 
        style={{width: '60%', height: '20%', borderRadius: 15}}/>
      <Text style={{ fontSize: 16, color: "#000", fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Saiba quanto em R$ seus Bitcoins valem, ou quantos Bitcoins você adquire com um valor X em reais</Text>

      <TextInput onChangeText={(value) => setCrypto(value)} keyboardType="numeric" placeholder="Digite o valor de 1 BTC em R$" style={{ backgroundColor: '#fff', width: '90%', marginVertical: 5 }} />
      <TextInput onChangeText={(value) => setAmount(value)} keyboardType="numeric" placeholder="Digite a quantidade que você deseja converter" style={{ backgroundColor: '#fff', width: '90%', marginVertical: 5 }} />
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={typeConvert}
        buttons={buttons}
        containerStyle={{height: 30}}
      />
      <TouchableOpacity onPress={calculate} 
        style={{width: '25%', backgroundColor:'#bbbaff', borderRadius: 10}}>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10
          }}>Calcular</Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          color: '#000',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20

        }}>Você está adquirindo:</Text>

      <Text style={{ color: '#000', fontSize: 30, fontWeight: "bold" }}>{resultado}</Text>
    </ImageBackground>
  );
};

export default App;
