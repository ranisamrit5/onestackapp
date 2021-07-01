import React, { memo,useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableWithoutFeedback, Image,FlatList } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../../utils/theme';
const RecurringuserComponent = memo((props) => {
    let [data, setData] = useState([1, 2, 3, 4, 5, 6,7,8,9,10]);
    let [data1, setData1] = useState([1, 2, 3, 4, 5, 6,7,8,9,10]);
    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1,paddingBottom:16 }} >
                    <View style={styles.rowbox}>
                        <Image
                            source={Images.mylocation}
                            style={styles.locationImg} />
                        <Text style={styles.textStyle}>{"Andhra Pradesh"}</Text>
                        <TouchableWithoutFeedback onPress={() => props.go()}  style={{alignSelf:"center"}}>
                            <Image
                            source={Images.down}
                            style={styles.downImg}/>
                        </TouchableWithoutFeedback>
                         </View>
                      
                    <View style={styles.seperatorView}></View>
                    <View style={styles.headerRow}>
                        <Text style={styles.titletextStyleSemiBold}>{"Recently Paid"}</Text>
                    </View>
                    <FlatList 
                            data={data1}
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}
                            renderItem={({ item }) =>
                            <View>
                  
                      <View style={styles.rowlistbox}>
                        <View style={styles.rowlisttext}>
                            <Image style={styles.rowImageStyle} source={Images.power}></Image>
                            <Text style={styles.rowtitletextStyleA}>{"HOME-EB"}</Text>
                            <Text style={styles.rowtitletextStyleB}>{"XX8754"}</Text>
                        </View>
                    </View>
              </View>  } />



                    <View style={styles.headerRow}>
                        <Text style={styles.titletextStyleSemiBold}>{"Select Your Board"}</Text>
                    </View>
                    <FlatList
                            data={data}
                            showsHorizontalScrollIndicator={true}
                            renderItem={({ item }) =>
                            <View>
                  
                      <View style={styles.borderbox}>
                        <View style={styles.rowView}>
                            <Image style={styles.rowImageStyle} source={Images.power}></Image>
                            <Text style={styles.rowtitletextStyle}>{"Central Power Distribution Corporation of A.P Ltd (APCPDCL)"}</Text>
                        </View>
                    </View>
              </View>  } />
                  
                   
                 

                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default RecurringuserComponent;
