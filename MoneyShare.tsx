import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
//import money from './assets/money.png'
import Checkbox from 'expo-checkbox'

const MoneyShare = () => {
  const [money, setMoney] = useState('')
  const [people, setPeople] = useState('')
  const [tip, setTip] = useState('')
  const [tipStatus, setTipStatus] = useState(false)
  const [moneyShare, setMoneyShare] = useState('0.00')

  //ฟังก์ชันคํานวณ
  const calMoneyShare = () => {
    //Validate UI
    if(money == ''){
      alert('กรุณาป้อนจํานวนเงิน')
    }
    else if(people == ''){
      alert('กรุณาป้อนจํานวนคน')
    }
    else if(tipStatus == true && tip == ''){
      alert('กรุณาป้อนจํานวนทิป')
    }
    else{
      let m = parseFloat(money)
      let p = parseFloat(people)
      let t = tipStatus == true ? parseFloat(tip) : 0
      let ms = (m + t) / p
      setMoneyShare(ms.toFixed(2))
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
      
      <View style={styles.appbar}>
        <Text style={styles.titlAppbar}>MoneyShare</Text>
      </View>
      <Image source={require('./assets/money.png')} style={styles.showLogo}/>
      <TextInput value={money} onChangeText={setMoney} style={styles.inputNumber} placeholder='ป้อนจำนวนเงิน' keyboardType='numeric'/>
      <TextInput value={people}  onChangeText={setPeople} style={styles.inputNumber} placeholder='ป้อนจำนวนคน' keyboardType='numeric'/>
      <View style={{height: 50}}/>
      <View style={{flexDirection: 'row'}}>
        <Checkbox value={tipStatus} onValueChange={setTipStatus} />
        <View style={{height: 10}}/>
        <Text>ทิปให้พนักงาน</Text>
      </View>
      <TextInput value={tip}  onChangeText={setTip} style={styles.inputNumber} placeholder='ป้อนจำนวนคน' keyboardType='numeric'/>
      <TouchableOpacity style={styles.btnCal} onPress={calMoneyShare}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>คำนวณ</Text>
      </TouchableOpacity>
      <View style={{height: 30}}/>
      <Text>หารกันคนละ</Text>
      <Text style={{color: 'red', fontSize: 60, fontWeight: 'bold'}}>{moneyShare}</Text>
      <Text >บาท</Text>
     </View>
     </TouchableWithoutFeedback>
  )
}
export default MoneyShare

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#ff0000',
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  titlAppbar:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  showLogo: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 50
  },
  inputNumber: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  btnCal : {
    backgroundColor: 'green',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20
  }
})
