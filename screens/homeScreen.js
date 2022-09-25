/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors, images} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getLocal} from '../External Variable/Storage';
import axios from 'axios';
const HomeScreen = ({navigation}) => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [message, setMessage] = useState(null);
  const [tok, setToke] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      try {
        getLocal('token', setToke);
        // const values = {jambNo: '20302030'};
        console.log('tojen', tok);
        var InsertAPIURL =
          'https://onboarding-app-1.herokuapp.com/staff/profile';
        var headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + tok,
          // 'x-client-id' : 'qdfsyrtiyjtyfdrrtyfhr5ui7ytjh',
          // 'x-client-secret':'ewrwut79u0ypoiufuyuiyutiogiuytuyr',
          // 'x-source-code':'TEST'
        };
        await axios({
          method: 'get',
          url: InsertAPIURL,
          headers: headers,
        })
          .then(response => {
            console.log(response.data);
            setMessage(response.data);
            console.log('m', message);
          })

          // fetch(InsertAPIURL, {
          //   method: 'GET',
          //   headers: headers,
          //   // body: JSON.stringify(values), //convert data to JSON
          // })
          // .then(response => {
          //   // console.log('this is where =>', response);
          //   const d = response?.json();
          //   // console.log('gunter', d);
          //   return d;
          // }) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
          // .then(response => {
          //   console.log('turk', response);
          //   // const d = response.json();
          //   // console.log(d, 'here');
          //   setMessage(response);
          //   console.log('m', message);
          //   // console.log(response);

          //   // if (message == "Password successfully Reset") {
          //   //     console.log("true")
          // })
          .catch(e => console.log(e, 'error'));
      } catch (error) {
        console.log(error);
        alert('Error Occured');
      }
    };
    getProfile();
  }, [tok]);

  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <View style={styles.headerContainer}>
        {/* <Icon name="menu" size={24} color="#4385B7" /> */}
        <View style={styles.headerTxtWelcome}>
          <Text style={styles.headerWelcome}>Welcome: {message?.userName}</Text>
          <Text style={styles.subHeaderWelcome}>{message?.email}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={images.user_photo2}
            style={styles.profilePhoto}
            // resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* CONGRATULATIONS */}
      <View style={styles.congratsContainer}>
        <Image
          source={images.congrats}
          style={styles.logoCongrats}
          resizeMode="contain"
        />
        <View>
          <View style={styles.congratsTxtContainer}>
            <Text style={styles.congratsTxt}>Congratulations!</Text>
            <Text style={styles.onboardingStage}>
              Your Onboarding is
              <Text style={{color: colors.blue}}> 10% complete</Text>
            </Text>
            <TouchableOpacity style={styles.playMeet}>
              <FontAwesome name="play-circle" size={20} color="#B9D318" />
              <Text style={{color: colors.blue}}>Meet the team</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Id Card  */}
      <View style={styles.idCardContainer}>
        <View style={styles.idCardTxtContainer}>
          <View>
            <Text style={{color: colors.white}}>Name: </Text>
            <Text style={styles.IdCardTxt}>Surname: </Text>
            <Text style={styles.IdCardTxt}>Staff Number: </Text>
            <Text style={styles.IdCardTxt}>Signature: </Text>
          </View>
          <View style={styles.idCard}>
            <TouchableOpacity>
              <Icon name="image" size={30} color="#EFEFEF" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View style={styles.sampleContainer}>
            <Icon name="alert-circle" color={colors.white} size={10} />
            <Text style={styles.sampleTXT}>
              This is just a sample of your ID
            </Text>
          </View>
          <Image source={images.eco_Logo} style={styles.ecobankLogo} />
        </View>
      </View>

      {/* toggle */}
      <View style={styles.toggleOnboard}>
        {/* Onboarding */}
        <View style={styles.onBoard}>
          <View style={styles.rocket}>
            <Image
              source={images.rocketIcon}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.onBoardTxt}>Onboarding</Text>
        </View>

        {/* post onboarding */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 5,
            width: 175,
          }}>
          <View
            style={{
              backgroundColor: '#f1f1f1',
              width: 32,
              height: 32,
              borderRadius: 32 / 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <FontAwesome5 name="socks" size={20} color="#D3D3D3" />
          </View>

          <Text
            style={{
              fontSize: 15,
              color: '#656565',
              opacity: 0.3,
              fontFamily: 'Lato-Regular',
            }}>
            Post Onboarding
          </Text>
        </View>
      </View>
      <ScrollView>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator}>
              <CircularProgress
                value={70}
                radius={30}
                progressValueColor={'#B9D318'}
              />
            </View>
            <View style={styles.progessstxtGrp}>
              <View style={styles.textProgress}>
                <Text style={styles.Headertxt}>Personal History</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.borderSub}>
                    <Text style={styles.subTxt}>
                      Input the details for your personal details, address,{' '}
                      {'\n'}
                      employment history
                    </Text>
                  </View>
                  <View style={styles.progressIcon}>
                    <TouchableOpacity
                      onPress={() => {
                        setToggle(!toggle);
                        console.log('sdgdgd');
                      }}>
                      <Ionicons
                        name={
                          toggle
                            ? 'ios-chevron-up-circle'
                            : 'chevron-down-circle-sharp'
                        }
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* //dropdownContent */}

          {/* Personal History  */}
          {toggle && (
            <View>
              {/* Personal Details */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Personal Details</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtComplete}>
                    <Text style={styles.progressTxtsub}>Finished</Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Personal History')}>
                      <View>
                        <Ionicons
                          name="ios-chevron-forward-sharp"
                          size={20}
                          color="#A0A0A0"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Address */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Address</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtInProgress}>
                    <Text style={styles.progressTxtInProgresssub}>
                      10% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <TouchableOpacity onPress={() => navigation.navigate()}>
                      <Ionicons
                        name="ios-chevron-forward-sharp"
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Employment Records */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Employment Records</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtNotStarted}>
                    <Text style={styles.progressTxtNotStartedsub}>
                      0% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AddressForm')}>
                      <Ionicons
                        name="ios-chevron-forward-sharp"
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Additional Information */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>
                    Additional Information
                  </Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtInProgress}>
                    <Text style={styles.progressTxtInProgresssub}>
                      10% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Contact')}>
                      <Ionicons
                        name="ios-chevron-forward-sharp"
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Submit Documents  */}
        <View style={styles.progressContainer2}>
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator}>
              <CircularProgress
                value={30}
                radius={30}
                progressValueColor={'#B9D318'}
              />
            </View>
            <View style={styles.progessstxtGrp}>
              <View style={styles.textProgress}>
                <Text style={styles.Headertxt}>Address</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.borderSub}>
                    <Text style={styles.subTxt}>
                      Input the details for your personal details, address,{' '}
                      {'\n'}
                      employment history
                    </Text>
                  </View>
                  <View style={styles.progressIcon}>
                    <TouchableOpacity
                      onPress={() => {
                        setToggle3(!toggle3);
                        //   console.log('sdgdgd');
                      }}>
                      <Ionicons
                        name={
                          toggle3
                            ? 'ios-chevron-up-circle'
                            : 'chevron-down-circle-sharp'
                        }
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* //dropdownContent */}

          {/* Personal History  */}
          {toggle3 && (
            <View>
              {/* Personal Details */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Personal Details</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtComplete}>
                    <Text style={styles.progressTxtsub}>Finished</Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AddressForm')}>
                      <Ionicons
                        name="ios-chevron-forward-sharp"
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Address */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Address</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtInProgress}>
                    <Text style={styles.progressTxtInProgresssub}>
                      10% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>

              {/* Employment Records */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Employment Records</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtNotStarted}>
                    <Text style={styles.progressTxtNotStartedsub}>
                      0% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>

              {/* Additional Information */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>
                    Additional Information
                  </Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtInProgress}>
                    <Text style={styles.progressTxtInProgresssub}>
                      10% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Our History  */}
        <View style={styles.progressContainer2}>
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator}>
              <CircularProgress
                value={90}
                radius={30}
                progressValueColor={'#B9D318'}
              />
            </View>
            <View style={styles.progessstxtGrp}>
              <View style={styles.textProgress}>
                <Text style={styles.Headertxt}>Our History</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.borderSub}>
                    <Text style={styles.subTxt}>
                      Input the details for your personal details, address,{' '}
                      {'\n'}
                      employment history
                    </Text>
                  </View>
                  <View style={styles.progressIcon}>
                    <TouchableOpacity
                      onPress={() => {
                        setToggle2(!toggle2);
                        //   console.log('sdgdgd');
                      }}>
                      <Ionicons
                        name={
                          toggle2
                            ? 'ios-chevron-up-circle'
                            : 'chevron-down-circle-sharp'
                        }
                        size={20}
                        color="#A0A0A0"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* //dropdownContent */}

          {/* Personal History  */}
          {toggle2 && (
            <View>
              {/* Personal Details */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Personal Details</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtComplete}>
                    <Text style={styles.progressTxtsub}>Finished</Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>

              {/* Address */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Address</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtInProgress}>
                    <Text style={styles.progressTxtInProgresssub}>
                      10% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>

              {/* Employment Records */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>Employment Records</Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtNotStarted}>
                    <Text style={styles.progressTxtNotStartedsub}>
                      0% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>

              {/* Additional Information */}
              <View style={styles.dropdownContent}>
                <View>
                  <Text style={styles.headTxtDropdown}>
                    Additional Information
                  </Text>
                  <Text style={styles.subTxtDropdown}>
                    Name, Surname, Date of birth
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.progressTxtInProgress}>
                    <Text style={styles.progressTxtInProgresssub}>
                      10% complete
                    </Text>
                  </View>
                  <View style={{marginLeft: 40}}>
                    <Ionicons
                      name="ios-chevron-forward-sharp"
                      size={20}
                      color="#A0A0A0"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    paddingBottom: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  headerTxtWelcome: {marginLeft: 25},
  headerWelcome: {
    fontSize: 13,
    color: colors.headerTxt,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  subHeaderWelcome: {
    fontSize: 10,
    color: colors.subText,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  profilePhoto: {
    height: 40,
  },
  idCardContainer: {
    padding: 15,
    marginBottom: 35,
    backgroundColor: colors.focusBlue,
    borderRadius: 4,
  },
  idCardTxtContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  IdCardTxt: {color: colors.white, paddingTop: 10},
  idCard: {
    backgroundColor: '#FFFFFF',
    width: 118,
    height: 118,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#B9D318',
    borderWidth: 1,
  },
  congratsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  congratsTxtContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    alignItems: 'center',
  },
  congratsTxt: {fontSize: 25, fontFamily: 'Roboto-Bold'},
  sampleContainer: {
    backgroundColor: '#9FC4E1',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingRight: 30,
    opacity: 1,
  },
  sampleTXT: {
    color: colors.white,
    fontSize: 8,
    fontFamily: 'Roboto-Regular',
    paddingLeft: 10,
  },
  ecobankLogo: {height: 18, width: 35},
  onboardingStage: {fontSize: 9.5, fontFamily: 'Roboto-Regular', marginTop: 5},
  logoCongrats: {
    height: 50,
    width: 50,
  },
  playMeet: {
    flexDirection: 'row',
    backgroundColor: '#9FC4E1',
    padding: 5,
    justifyContent: 'space-between',
    width: 115,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
  },
  progressContainer: {
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 4,
  },
  progressContainer2: {
    flexDirection: 'column',
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textProgress: {
    flexDirection: 'column',
    margin: 5,
  },
  Headertxt: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    paddingBottom: 10,
  },
  onBoard: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    // height: 60,
    margin: 5,
    borderRadius: 4,
    width: 165,
  },
  toggleOnboard: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    borderRadius: 4,
    height: 60,
    marginBottom: 31,
  },
  rocket: {
    backgroundColor: '#EBF2F7',
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  onBoardTxt: {
    fontSize: 16,
    color: '#434343',
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
  },
  borderSub: {
    borderRadius: 4,
    borderColor: '#D6D5D5',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 5,
  },
  progressIndicator: {
    justifyContent: 'center',
  },
  progessstxtGrp: {
    flexDirection: 'row',
  },
  progressIcon: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  dropdownContent: {
    paddingTop: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginLeft: 10,
  },
  headTxtDropdown: {fontSize: 13, fontFamily: 'Roboto-Medium'},
  subTxtDropdown: {
    fontSize: 9,
  },
  subTxt: {fontSize: 9},
  progressTxtComplete: {
    borderRadius: 4,
    backgroundColor: 'rgba(185, 211, 24, 0.15)',
    marginLeft: 20,
    height: 20,
    width: 82,
    justifyContent: 'center',
  },
  progressTxtInProgress: {
    borderRadius: 4,
    backgroundColor: 'rgba(63, 129, 180, 0.15)',
    marginLeft: 20,
    height: 20,
    width: 82,
    justifyContent: 'center',
  },
  progressTxtNotStarted: {
    borderRadius: 4,
    backgroundColor: 'rgba(237, 96, 180, 0.15)',
    marginLeft: 20,
    height: 20,
    width: 82,
    justifyContent: 'center',
  },
  progressTxtsub: {
    color: '#6A890B',
    fontSize: 9.5,
    textAlign: 'center',
  },
  progressTxtInProgresssub: {
    color: '#3F81B4',
    fontSize: 9.5,
    textAlign: 'center',
  },
  progressTxtNotStartedsub: {
    color: '#ED5960',
    fontSize: 9.5,
    textAlign: 'center',
  },
});
