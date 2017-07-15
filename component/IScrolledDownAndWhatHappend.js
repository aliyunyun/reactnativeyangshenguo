import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

export default class IScrolledDownAndWhatHappend extends Component {
    render(){
        return (
            <ScrollView>
                <Text style={{fontSize:96}}>scroll me plz</Text>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Text style={{fontSize:96}}>scroll me plz</Text>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Text style={{fontSize:96}}>scroll me plz</Text>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Text style={{fontSize:96}}>scroll me plz</Text>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Text style={{fontSize:96}}>scroll me plz</Text>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
                <Image source={require('../img/log.png')}/>
            </ScrollView>
        );
    }
}