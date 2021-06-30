import React, { memo,useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image,FlatList } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../utils/theme';
const BillPaymentComponent = memo((props) => {
    let [data, setData] = useState([1, 2, 3, 4, 5, 6,7,8,9,10]);
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
                        <TouchableOpacity style={{alignSelf:"center"}}>
                            <Image
                            source={Images.down}
                            style={styles.downImg}/>
                        </TouchableOpacity>
                         </View>
                      <View style={styles.seperatorView}></View>
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
                            <Text onPress={() => props.go()}  style={styles.rowtitletextStyle}>{"Central Power Distribution Corporation of A.P Ltd (APCPDCL)"}</Text>
                        </View>
                    </View>
              </View>  } />
                  
                   
                 

                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default BillPaymentComponent;
