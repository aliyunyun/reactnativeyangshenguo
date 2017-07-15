import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class YYText extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    render(){
        return(<View style={{height: 200}}>
            <View style={styles.boxflex}>
                <View style={styles.contentBlock1}/>
                <View style={styles.contentBlock2}/>
                <View style={styles.contentBlock3}/>
            </View>
           <TextInput style={{height: 40, color:'black'}}
                    placeholder="Type here to translate!"
                    onChangeText={(text)=>this.setState({text})}
           />
           <Text style={{padding: 10, fontSize: 42}}>
                content: {this.state.text.split(' ').map((word)=> word && '🍕').join(' ')}
           </Text>
        </View>);
    }
}


var styles = StyleSheet.create({
    yyTitle: {
        backgroundColor:'#222222',
        fontSize:20
    },
    boxflex:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        height:100,
        width:'100%'
    },
    contentBlock1: {
        width: 50,
        height:50,
        backgroundColor:'powderblue'
    },
       contentBlock2: {
        width: 60,
        height:60,
        backgroundColor:'skyblue'
    },
       contentBlock3: {
        width: 70,
        height:70,
        backgroundColor:'steelblue'
    },
});

