import React, { memo,useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TextInput, Image,FlatList, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors, sizes, fonts, Images } from '../../../../utils/theme';
const Search1Component = memo((props) => {
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
                    <FlatList
                            data={data}
                            showsHorizontalScrollIndicator={true}
                            renderItem={({ item }) =>
                            <View>
                  
                      <View style={styles.borderbox}>
                      <View style={styles.seperatorView}></View>
                      <TouchableOpacity onPress={() => props.go()}> 
                           <Text style={styles.rowtitletextStyle}>{"Andhra Pradesh"}</Text>
                      </TouchableOpacity>
                           
                           
                    </View>
              </View>  } />
                  
                   
                 

                </ScrollView>
            </SafeAreaView>


        </View>
    );
});

export default Search1Component;
