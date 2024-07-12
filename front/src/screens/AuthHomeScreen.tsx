import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavigator';
import {authNaviagtions} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviagtions.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <View>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => navigation.navigate(authNaviagtions.LOGIN)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
