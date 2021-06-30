import React, { useState, useEffect, memo } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Images, colors, fonts, sizes, constants } from '../../utils/theme';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { store } from '../../redux/actions/store'
import * as commonAction from '../../redux/actions/commonAction'

const CustomSidebarMenu = memo(({ navigation, clearUserSession }) => {
  const [data, setData] = useState({
    "email": '',
    "profileImage": '',
    "name": '',
  });

  const isDrawerOpen = useIsDrawerOpen();

  useEffect(() => {
    setDataProfile()
  }, [isDrawerOpen]);

  const setDataProfile = async () => {
    const { data } = store.getState().userSession;
    if (data?.Results != null) {
      const userObj = data?.Results
      const user_profile_name = userObj.first_name + " " + userObj.last_name
      const user_profile_email = userObj.email
      setData({ ...data, email: user_profile_email, name: user_profile_name })
    } else {
      setData({ ...data, email: "", name: "" })
    }
  }

  const items_tools = [
    {
      navOptionName: 'Home',
      screenToNavigate: 'HomeContainer',
    },
    {
      navOptionThumb: Images.logout,
      navOptionName: 'Log Out',
      screenToNavigate: 'LoginContainer',
      index: 0
    },
  ];

  return (
    <View style={styles.sideMenuContainer}>
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.StatusBar}>
          <StatusBar translucent barStyle='dark-content' />
        </View>
        <View style={{ width: '100%', backgroundColor: colors.white }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.profileImgContainer}>
              <View style={styles.profileImg1}>
                <Text style={{
                  fontSize: sizes.regularLarge,
                  fontSize: 18,
                  color: colors.white,
                  alignItems: 'center'
                }}>{(data?.name == "" || data.name == undefined) ? "" : data.name[0]}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'column' }}>

              <Text style={{
                fontSize: sizes.regularLarge,
                marginLeft: 15,
                fontSize: 12,
                color: colors.black,
                marginTop: 15,
              }}>{data.name}</Text>

              <Text style={{

                marginLeft: 15,
                fontSize: 12,
                marginRight: 10,
                marginTop: 15,
                marginBottom: 15,
              }}>{data.email}</Text>

            </View>
          </View>

        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            marginBottom: 10,
            backgroundColor: '#e2e2e2',
          }}
        />

        <View style={{ width: '100%' }}>
          {items_tools.map((items_tools, key) => (

            <TouchableWithoutFeedback onPress={() => {
              global.currentScreenIndex = key;
              navigation.closeDrawer();
              setTimeout(() => {
                if (items_tools.navOptionName === 'Log Out') {
                  clearUserSession()
                  navigation.navigate('LoginScreenNew')
                } else {
                  navigation.navigate(items_tools.screenToNavigate);
                }
              }, 100);
            }} key={key}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 15,
                  backgroundColor: colors.white,
                }}
              >
                <Text
                  style={{
                    fontSize: 12, alignItems: 'stretch',
                    marginLeft: 15,
                    fontWeight: '500',
                    color: global.currentScreenIndex === key ? colors.main : colors.black,
                    marginTop: 5, marginBottom: 5
                  }}>
                  {items_tools.navOptionName}

                </Text>

              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );

});
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    paddingTop: 0,
    overlayColor: '#6b52ae',
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#000000',
    borderRadius: 100 / 2,
  },
  LoginHereButton: {
    color: '#5190c0',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  profileImgContainer: {
    width: 66,
    borderRadius: 33,
    borderWidth: 0,
    marginLeft: 15,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderColor: colors.view_color,
  },

  profileImg1: {
    marginLeft: 0,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
const mapDispatchToProps = (dispatch) => ({
  clearUserSession: () => dispatch(commonAction.clearUserSession()),
});
export default connect(null, mapDispatchToProps)(CustomSidebarMenu);