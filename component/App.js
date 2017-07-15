import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import ImageButton from './common/ImageButton';
import SetingPage from './page';



 class MainScreen extends Component {
     static navigationOptions = {
         title:'首页'
     }
    constructor(props){
        super(props);
    }
    switchButtonAction(){

    }
    modeButtonAction(){
        const {navigate} = this.props.navigation;
        navigate('Seting');
    }
    cloudCookBookAction(){

    }
    render(){
        return (
        <View style={styles.container}>
            <View style={styles.topControl}>
                <Image source={require('../img/backgroundImage.png')} style={styles.topControl_img} >
                    <View style={styles.topControl_statusView}>
                        <Text style={styles.topControl_statusTitle}>待机中</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={this.switchButtonAction}
                        style={styles.topControl_switch}
                        >
                        <Image source={require('../img/close.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity>
               </Image>
            </View>
            <View style={styles.bottomControl}>
                <View style={bottomStyles.modebuttoncontainer}>
                    <View style={bottomStyles.modeViewLeft}>
                        <ImageButton 
                        onPress={this.modeButtonAction.bind(this)} 
                        disabled={false} 
                        style={bottomStyles.modeButton}
                        text={'模式'}
                        imageUrl={require('../img/mode_off.png')}
                        imageStyle={{width:30,height:30}}
                        />
                    </View>
                    <View style={bottomStyles.modeView}>
                      <ImageButton 
                        onPress={this.cloudCookBookAction} 
                        disabled={false} 
                        style={bottomStyles.modeButton}
                        text={'云菜谱'}
                        imageUrl={require('../img/cloudcookbook_off.png')}
                        imageStyle={{width:30,height:30}}
                        />
                    </View>
                </View>
                <View style={bottomStyles.cancelButtonContainer}>
                    <View style={{flex:2,backgroundColor:'#f1f1f1',justifyContent:'center'}}>
                        <Text style={{color:'#c7c7c7',textAlign:'center',fontSize:11}}>点击取消，重置切换当前模式</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style={{flex:3,justifyContent:'center',borderTopWidth:1 / PixelRatio.get(), borderStyle:'solid', borderColor:'#dcdcdc'}}
                        >
                        <Text style={{textAlign:'center',fontSize:16,color:'#4c91fc'}}>取消</Text>
                    </TouchableOpacity>
                    
                    
                </View>
            </View>
         </View>);
    }
}


var bottomStyles=StyleSheet.create({
    modebuttoncontainer:{
        flex:3,
        flexDirection:'row',
    },
    cancelButtonContainer:{
        flex:2,
        flexDirection:'column'
    },
    modeView:{
        flex:1,
        width:'50%',
        justifyContent:'center',
        borderBottomWidth:1 / PixelRatio.get(),
        borderStyle:'solid',
        borderColor:'#dcdcdc'
    },
    modeViewLeft:{
        flex:1,
        width:'50%',
        justifyContent:'center',
        borderRightWidth:1 / PixelRatio.get(),
        borderBottomWidth:1 / PixelRatio.get(),
        borderStyle:'solid',
        borderColor:'#dcdcdc'
    },
    modeButton:{
        textAlign:'center',
        color:'#7c7c7c',
        fontSize:13,
        marginTop:6
    },
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    topControl:{
        flex:15,
        flexDirection:'column'
    },
    bottomControl:{
        flex:7,
        flexDirection:'column',
        backgroundColor:'white'
    },

    topControl_img:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    },

    topControl_statusView:{
        borderRadius:12,
        backgroundColor:'#71b8f3', 
        width:70,
        height:24,  
        bottom:60,
    },
    topControl_statusTitle:{
        textAlign:'center',
        height:24,
        lineHeight:20,
        color:'white',
        backgroundColor:'transparent',
        fontSize:14,
    },
    topControl_switch:{
        position:'absolute',
        bottom:20,
        right:39
    },
});


const App = StackNavigator({
    Main:{
        screen: MainScreen,
    },
    Seting:{screen:SetingPage}
});

export default App;