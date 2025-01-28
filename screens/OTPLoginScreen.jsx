import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OTPLogin = ({ onAuthenticated }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigation = useNavigation();
  const DEMO_PHONE = '1234567890'; // Demo phone number
  const DEMO_OTP = '123456'; // Demo OTP

  const sendOtp = () => {
    if (phoneNumber !== DEMO_PHONE) {
      Alert.alert('Error', 'Please enter the demo phone number: 1234567890.');
      return;
    }
    Alert.alert('OTP Sent', 'A 6-digit OTP has been sent to your phone number.');
    setIsOtpSent(true);
  };

  const verifyOtp = () => {
    if (otp !== DEMO_OTP) {
      Alert.alert('Error', 'Invalid OTP. Please enter the demo OTP: 123456.');
      return;
    }
    Alert.alert('Success', 'You have successfully logged in!');
    setPhoneNumber('');
    setOtp('');
    setIsOtpSent(false);
    onAuthenticated(); // Call parent function to set authentication status

    // You could navigate here or just update authentication state
    // navigation.replace('Home'); // If you want to navigate after success
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require('../static/images/Vipani.jpeg')} // Ensure this path is correct
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <LinearGradient colors={['#fffff', '#2575FC']} style={styles.gradient}>
            <View style={styles.card}>
              <Text style={styles.title}>OTP Login</Text>
              {!isOtpSent ? (
                <>
                  <Text style={styles.label}>Enter Phone Number:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="1234567890"
                    placeholderTextColor="#aaa"
                    keyboardType="phone-pad"
                    maxLength={10}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <TouchableOpacity style={styles.button} onPress={sendOtp}>
                    <Text style={styles.buttonText}>Send OTP</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.label}>Enter OTP:</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="123456"
                    placeholderTextColor="#aaa"
                    keyboardType="number-pad"
                    maxLength={6}
                    value={otp}
                    onChangeText={setOtp}
                  />
                  <TouchableOpacity style={styles.button} onPress={verifyOtp}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#6A11CB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#6A11CB',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPLogin;
