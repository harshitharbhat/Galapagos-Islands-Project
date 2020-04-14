import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Button, Text, View, ScrollView, Image, Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
let rem;
rem = entireScreenWidth / 350;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    header:{
        flexDirection: 'row',
        paddingVertical: 16,
        paddingLeft: 34,
        alignItems: 'center'
    },
    headerText: {
        paddingLeft: 16,
        fontSize: 34*rem,
        fontWeight: '600'
    },
    bodyContainer:{
        paddingVertical: 36*rem,
        paddingHorizontal: 33*rem,
        paddingBottom: 52*rem
    },
    subHeader:{
        fontWeight: '600',
        color: '#000000',
        fontSize: 17*rem,
        paddingLeft: 34,
        paddingTop: 16,
        paddingBottom: 16
    },
    bodyText:{
        fontSize: 17*rem,
        color: '#616161',
        lineHeight: 22 * rem
    }
});


class Protect extends React.Component {
    render(){
        return (
                  <View style={styles.container}>
                      <View style={styles.header}>
                          <Image
                              source={require('../../../app/assets/icons/bike.png')}
                              style={{width: 35*rem, height: 22*rem}}
                          />
                          <Text style={styles.headerText}>How to Protect</Text>
                      </View>
                      <Image
                          source={require('../../../app/assets/images/headerImage.png')}
                          style={{width: entireScreenWidth, height: 81*rem}}
                      />
                  <ScrollView>
                      <View style={styles.bodyContainer}>
                          <Text style={styles.bodyText}>There are currently several people, institutions and initiatives that seek to protect the
                        flora and fauna of the Galapagos. Many of these plans need the commitment and effort of people,
                        especially those who live in the archipelago. One of these ideas is to commit government
                        institutions to carry out a stricter control in the entrance and exit channels of exotic
                        species, since not only the introduced animals represent a danger, but those that leave
                        illegally, mocking the airport controls. Regarding the species already introduced,
                        ideas have been proposed to reforest with endemic species, through agreements with farmers
                        in the area and, in addition, to put into practice a type of organic and friendly cultivation
                        with the ecosystem of the islands. Another alternative that is being applied is to empower the
                        inhabitants of the islands so that they are the main guardians of the endemic species, animals
                        and plants, of the different areas of Galapagos. A sustainable economy and production project
                        is already running, in which organic matter is being processed to market organic,
                        environmentally friendly organic products. On the other hand, artisanal fishing is
                        gaining ground, which is intended to end illegal hunting. And, in 2018, it was closed with the
                        approval of the law prohibiting the use of disposable plastics, especially t-shirt covers, in
                        all the Galapagos Islands. These measures and initiatives seek to recover ecosystems and
                        preserve the flora and fauna of the Galapagos Islands. </Text>
                      </View>
                </ScrollView>
              </View>
        );
    }
}

export default Protect;