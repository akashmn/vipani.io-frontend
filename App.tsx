import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import OTPLogin from './screens/OTPLoginScreen';
import HomeScreen from './screens/HomeScreen';
import CommunityScreen from './screens/CommunityScreen';
import InboxScreen from './screens/InboxScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PreviousOrdersScreen from './screens/PreviousOrdersScreen';
import WishlistScreen from './screens/WishlistScreen';
import ChatScreen from './screens/ChatScreen';
import SellerScreen from './screens/SellerScreen';
import CategoriesListingScreen from './screens/CategoriesListingScreen';
import BannerListingScreen from './screens/BannerListingScreen';
import HomeSearchScreen from './screens/HomeSearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <OTPLogin onAuthenticated={handleAuthentication} />
      ) : (
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
          <Tab.Screen name="PreviousOrders" component={PreviousOrdersScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="SellerScreen" component={SellerScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="CategoriesListingScreen" component={CategoriesListingScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="BannerListingScreen" component={BannerListingScreen} options={{ tabBarButton: () => null }} />
          <Tab.Screen name="HomeSearchScreen" component={HomeSearchScreen} options={{ tabBarButton: () => null }} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
