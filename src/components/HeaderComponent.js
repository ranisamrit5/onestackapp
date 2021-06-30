import React, { memo, useState } from 'react';
import { View, StatusBar, Image,TouchableOpacity } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title, Container } from "native-base";
import * as Progress from 'react-native-progress';




    const HeaderComponent = memo((props) => {
  
        return (
            <View>
                <Header  transparent>
                <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" />
                    <View style={{    flexDirection:'row',alignSelf:'center',justifyContent:'center', height:50,width:"95%"}}>
                                <TouchableOpacity style={{alignSelf:"center",}}
                                onPress={() => props.navigation.pop()}>
                                    <Image style={{ width: 30, height: 30, }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png', }} />

                                </TouchableOpacity>
                                <Progress.Bar progress={0.3} width={300} borderColor="black"  color="#000" alignSelf='center'/>
                            </View>

                </Header>
            </View>
        );
    });


export default HeaderComponent;