import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { requestUserPermission, listenForNotifications } from './NotificationService';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    requestUserPermission();
    listenForNotifications();
  }, []);

  const handlePress = () => {
    setCount(count + 1);
    // Simulate notification (you can replace this with actual FCM logic)
    Alert.alert('Notification', `Count increased to ${count + 1}`);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Increase Count" onPress={handlePress} />
    </View>
  );
};

export default App;
