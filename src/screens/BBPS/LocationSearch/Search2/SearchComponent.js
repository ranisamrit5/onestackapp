import React, { memo,useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TextInput, Image,FlatList, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../../utils/theme';
const SearchComponent = memo((props) => {
    let [data, setData] = useState([1, 2, 3, 4, 5, 6,7,8,9,10]);
  
    return (
        <View safe style={styles.container}>
            <Spinner visible={props.isLoading} />
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1,paddingBottom:16 }} >
                    <View style={styles.rowbox}>
                        <TouchableOpacity style={{alignSelf:"center"}}>
                            <Image
                            source={Images.search}
                            style={styles.searchImg} />  
                        </TouchableOpacity>
                            <TextInput 
                             autoFocus={true}
                            keyboardType={"name-phone-pad"}
                        value={props.mobile}
                        placeholder={"Search state"} 
                        style={styles.textInput} >
                            </TextInput>
                         
                        </View>
                
                 <View style={styles.headerRow}>
                            <Image
                            source={Images.currentlocation}
                            style={styles.locationImg} />
                        <Text style={styles.titletextStyleSemiBold}>{"Use Current location"}</Text>
                    </View>
                  
                    <View style={{flexDirection:"column"}}>
                    <Image
                            source={Images.location}
                            style={styles.LocationImg} />
                    <Text style={styles.titletextStyle}>{"No results founds"}</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default SearchComponent;
