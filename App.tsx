import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CommunityScreen from './screens/CommunityScreen';
import InboxScreen from './screens/InboxScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PreviousOrdersScreen from './screens/PreviousOrdersScreen';
import WishlistScreen from './screens/WishlistScreen';
import ChatScreen from './screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Community':
                iconName = focused ? 'people' : 'people-outline';
                break;
              case 'Inbox':
                iconName = focused ? 'mail' : 'mail-outline';
                break;
              case 'Profile':
                iconName = focused ? 'person' : 'person-outline';
                break;
              case 'Cart':
                iconName = focused ? 'cart' : 'cart-outline';
                break;
              default:
                iconName = 'help-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Inbox" component={InboxScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="ContactUs" component={ContactUsScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="Orders" component={PreviousOrdersScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ tabBarButton: () => null }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}