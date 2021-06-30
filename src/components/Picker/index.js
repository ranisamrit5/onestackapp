
import React, { memo, useState } from 'react';
import { View, Modal, FlatList, TouchableOpacity, Text, StyleSheet, SafeAreaView,Image } from 'react-native';
import { Images, colors, fonts, sizes, constants } from '../../utils/theme';
const Picker = memo((props) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => { props.onPress(item) }} >
            <View style={styles.item}>
                <Image source={item.image} style={styles.flagStyle}></Image>
                <Text style={styles.headingText}>{`(${item.code}) `}</Text>
                <Text style={styles.headingText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <View>
            <Modal visible={props.show}>
                <SafeAreaView>
                    <FlatList
                        style={{ paddingBottom: 15, paddingTop: 15 }}
                        data={[{ name: "India", code: "+91", image: Images.dummy2 },{ name: "United States", code: "+1",image: Images.dummy3 }]}
                        numColumns={1}
                        renderItem={renderItem}
                    ></FlatList>
                </SafeAreaView>

            </Modal>
        </View>
    );
});
const styles = StyleSheet.create({
    item: {
        marginTop: 24,
        marginLeft: 24,
        marginTop: 5,
        flexDirection: 'row'

    },
    headingText: {
        marginTop: 5,
        marginLeft: 0,
        marginRight: 0,
        fontSize: sizes.medium,
        color: colors.mediumGray,
        fontFamily: fonts.Regular
    },
    flagStyle: {
        alignSelf: 'center',
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },

});
export default Picker;