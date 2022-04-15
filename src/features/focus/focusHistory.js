import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';
import { sizing, colors } from '../../utils/styling';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItems(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>Things we've focused on: </Text>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
            
          />
          <View style={styles.clearContainer}>
            <RoundedButton size={75} title="Clear" onPress={() => onClear()} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  historyItems: (status) => ({
    color: status == true ? 'green' : 'red',
    fontSize: sizing.md,
  }),
  title: {
    color: '#fff',
    fontSize: sizing.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: sizing.md,
  },
});
