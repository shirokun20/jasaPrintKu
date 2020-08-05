import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Platform,
  Dimensions
} from 'react-native';
//
import { APP_DEVELOPMENT } from '~/config/app.config';
import { VtContainer, VtBarStyle } from '~/components/VerificationComponents/vtData';
import SsModeDevelopment from '~/components/SplashScreenComponents/ssModeDevelop';
import { LgStyle } from '~/components/LoginComponents/lgStyle';
import { SsLogo } from '~/components/SplashScreenComponents/ssLogo';
import { VtInputCode } from '~/components/VerificationComponents/vtInput';
import { Constant } from '~/constants/index.constants';
import { SsShadow } from '~/components/SplashScreenComponents/ssShadow';
import { LStyle } from '~/components/LandingComponents/lcStyle';
import { VtStyle } from '~/components/VerificationComponents/vtStyle';
import SsAppName, { style } from '~/components/SplashScreenComponents/ssAppName';
import { ModalLoading } from '~/components/GlobalComponents/ModalLoading';
import { ModalAlert } from '~/components/GlobalComponents/ModalAlert';
//
const { width, height } = Dimensions.get('window');

class VerificationScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    inputFocus: false,
    maxInput: 5,
    alertSuccessVisible: false,
    alertSuccess: false,
    alertSuccessText: '',
    isLoading: false,
  };


  verificationCheck = (value = '') => {
    const { maxInput } = this.state;
    if (value.length >= maxInput) {
      this.setState({
        isLoading: true,
      });

      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
        this.alertShow();
      }, 2000);
    }
  }

  alertShow = () => {
    setTimeout(() => {
      this.setState({
        alertSuccessVisible: true,
        alertSuccessText: 'Gagal melakukan verifikasi nomor handphone dan email!'
      });
    }, 500);
  }

  render() {

    const {
      inputFocus,
      maxInput,
      alertSuccessVisible,
      alertSuccess,
      alertSuccessText,
      isLoading
    } = this.state;
    //
    const Content = (
      <VtContainer style={[LgStyle.contentContainer, {
        flex: inputFocus ? Platform.select({
          ios: width > 405 ? 2 : 1.5,
          android: 0.8
        }) : 1,
      }]}
      >
        <SsLogo ukuran={Platform.select({
          android: 150,
          ios: width > 405 ? 150 : 110
        })} />
        <SsAppName />
      </VtContainer>
    );
    //
    const TextVerifikasi = (
      <View style={{
        width: '90%',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: Platform.select({
            android: 'bold',
            ios: '600'
          }),
        }}>{Constant.textTitleVerifikasi}</Text>
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: Platform.select({
              android: 15,
              ios: 13,
            })
          }}>{Constant.textSubTitleVerifikasi}</Text>
        </View>
      </View>
    );
    //
    const KirimUlangKlik = (
      <TouchableOpacity activeOpacity={0.2} style={[style.cardView, SsShadow, {
        marginTop: 5,
      }]} onPress={() => {

      }}>
        <Text style={[LStyle.textContent, {
          color: Constant.warnaSemiRed,
        }]}>KIRIM ULANG</Text>
      </TouchableOpacity>
    );
    //
    const Footer = (
      <SafeAreaView style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: Platform.select({
          android: 10,
          ios: width > 405 ? 10 : 5,
        }),
      }}>
        <VtContainer style={[VtStyle.containerTextCode, SsShadow]}>
          {TextVerifikasi}
          <VtInputCode
            setFocus={(e) => this.setState({
              inputFocus: e,
            })}
            maxInput={maxInput}
            width="100%"
            callback={(value) => this.verificationCheck(value)}
          />
        </VtContainer>
        {!inputFocus ? (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={LStyle.textContent}>Belum mendapat Kode Verifikasi ?</Text>
            {KirimUlangKlik}
          </View>
        ) : null}
      </SafeAreaView>
    );
    //
    const AlertModal = (
      <View>
        <ModalLoading
          isLoading={isLoading}
        />
        <ModalAlert 
          alertSuccess={alertSuccess}
          isVisible={alertSuccessVisible}
          alertText={alertSuccessText}
          callback={() => {
            this.setState({
              alertSuccessVisible: false,
            })
          }}
        />
      </View>
    );
    return (
      <VtContainer>
        <VtBarStyle bStyle={Platform.select({
          android: APP_DEVELOPMENT ? 'light-content' : 'dark-content',
          ios: APP_DEVELOPMENT ? 'light-content' : 'dark-content'
        })} />
        {APP_DEVELOPMENT ? <SsModeDevelopment /> : null}
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : null}
          style={{
            width: '100%',
            height: '100%',
          }}
          enabled={Platform.select({
            android: true,
            ios: true,
          })}
        >
          <TouchableOpacity onPress={() => {
            Keyboard.dismiss();
          }} style={{
            width: '100%',
            height: '100%',
          }} activeOpacity={1}>
            {Content}
            {Footer}
          </TouchableOpacity>
        </KeyboardAvoidingView>
        {AlertModal}
      </VtContainer>
    );
  }
}

export default VerificationScreen;
