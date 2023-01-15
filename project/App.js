import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import axios from 'axios';

export default function App() {
  function App(){
  const [lista, setLista] = useState([]);
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [id, setId] = useState('');
  
  listDados();

  useEffect(()=>{
      listDados()
  },[])
    

  async function listDados(){
    const res = await axios.get('http://localhost/apireact/listar.php')
    setLista(res.data)
    console.log(res.data)
  }

  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#38a69d"} barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );

}