import { Platform } from 'react-native';

// When running on a physical device via Expo Go, localhost won't work.
// Use your machine's local IP for development, or your Vultr server IP for production.
const DEV_API_URL = Platform.OS === 'android'
  ? 'http://10.0.2.2:3000'   // Android emulator -> host machine
  : 'http://localhost:3000';  // iOS simulator -> host machine

export const API_URL = process.env.EXPO_PUBLIC_API_URL || DEV_API_URL;
