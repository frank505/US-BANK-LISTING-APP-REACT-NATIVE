import React,{useState,useEffect} from 'react';
import { View, StyleSheet,Image ,Share} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Drawer,
  Text,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from './NavigationRootRef';





export function DrawerContent(props) 
{

       

    const shareContent = async () =>
    {
      const shareOptions = {
        title: 'Share App',
        message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'www.example.com',
        subject: 'App Share'
      };

      Share.share(shareOptions);

    }

    const [currentPage, setcurrentPage] = useState("States");

    const goToPage = (page)=>
    {
     RootNavigation.navigate(page,{});
     setcurrentPage(page);
    }

    useEffect(() => {
        


        return () => {
          
        }
    }, [currentPage])

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>

            <Drawer.Section style={styles.drawerSection}>
          <Image
          source={require('./assets/images/USBanklisting2.png')}
          style={{height:70,width:250,marginLeft:-30}}
           />
           </Drawer.Section>
        </View>
        <Drawer.Section style={[styles.drawerSection,styles.secondStyling]}>
           
          <DrawerItem
            icon={({ color, size }) => (
                <Icon
                color={color}
                size={size}
                name={Platform.OS === 'android' ? 'md-location-sharp' : 'ios-location-sharp'}></Icon>
            )}
            style={
                currentPage=='States'?
                styles.clickClass
                :
                ""
            }
            label="US States"
            onPress={() => {goToPage('States')}}
          />
          <DrawerItem
             style={
                currentPage=='About'?
                styles.clickClass
                :
                ""
            }
            icon={({ color, size }) => (
                <Icon
                color={color}
                size={size}
                name={Platform.OS === 'android' ? 'md-information-circle' : 'ios-information-circle'}></Icon>
            )}
            label="About"
            onPress={() => {goToPage('About')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
                <Icon
                color={color}
                size={size}
                name={Platform.OS === 'android' ? 'md-share' : 'ios-share'}></Icon>
            )}
            label="Share"
            onPress={() => {shareContent()}}
          />
    

        </Drawer.Section>

        <Drawer.Section title="Preferences">
          
        <DrawerItem
         style={
          currentPage=='Privacy'?
          styles.clickClass
          :
          ""
      }
            icon={({ color, size }) => (
                <Icon
                color={color}
                size={size}
                name={Platform.OS === 'android' ? 'md-settings' : 'ios-settings'}></Icon>
            )}
            label="Privacy Policy"
            onPress={() => {goToPage('Privacy')}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 0,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  secondStyling:{
      marginTop:-10
  },
   clickClass:
   {
    backgroundColor:"#ccc"
   }
});