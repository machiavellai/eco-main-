/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, Image} from 'react-native';
import {images, colors} from '../constants';

const ModalPopUp = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  // const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false));
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={[styles.modalBackGround]}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const ModalO = ({navigation, imgSource, onPress = () => {}}) => {
  const [visible, setVisible] = useState(true);
  const pressHandler = () => {
    navigation.navigate('Home Screen');
  };
  const [page, setPage] = useState(0);
  const pageContent = [
    {
      header: 'Personal History',
      text: 'Get a look at the eProcess team video',
      imageSrc: images.Person,
    },
    {
      header: 'Company Policy',
      text: 'Get a look at the eProcess team video',
      imageSrc: images.companyPolicy,
    },
    {
      header: ' Emergency Contact',
      text: 'Get a look at the eProcess team video',
      imageSrc: images.emergencyContact,
    },
    {
      header: 'Submit Documents',
      text: 'Get a look at the eProcess team video',
      imageSrc: images.submitDocuments,
    },
    {
      header: 'EGibeerish',
      text: 'Get a look at the eProcess team video',
      imageSrc: images.companyPolicy,
    },
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPopUp visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Text style={{alignItems: 'center', fontSize: 15}}>
            {pageContent[page].header}
          </Text>
          <Text style={{color: colors.subGrey, fontSize: 10}}>
            {pageContent[page].text}
          </Text>
          <Image
            source={pageContent[page].imageSrc}
            style={{width: '80%', height: 150, marginTop: 30}}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 13,
              color: colors.green,
              marginRight: 0,
              marginTop: 30,
            }}
            onPress={pressHandler}>
            Go to Dashboard
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 30,
            }}>
            <Text
              style={{marginRight: 15, textAlign: 'right', color: '#C4C4C4'}}
              onPress={() => {
                if (page == 0) {
                  setPage(4);
                } else {
                  setPage(page - 1);
                }
              }}>
              Prev
            </Text>
            <Text
              style={{textAlign: 'right', color: '#242424'}}
              onPress={() => {
                if (page === 4) {
                  setPage(0);
                } else {
                  setPage(page + 1);
                }
              }}>
              Next
            </Text>
          </View>
        </View>
      </ModalPopUp>
    </View>
  );
};
export default ModalO;
const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: '#4F4F4F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 4,
    elevation: 20,
  },
});
