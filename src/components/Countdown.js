import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, sizing } from '../utils/styling';

const mintoMillis = (min) => min * 1000 * 60;

export const Countdown = ({
  minutes = 20,
  isPasued,
  onProgress,
  onEnd,
  ...props
}) => {
  const [millis, setMillis] = useState(null);
  const interval = useRef(null);
  const setCoundown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);

        
        return time;
      }
      const timeLeft = time - 1000;

      return timeLeft;
    });
  };
  useEffect(() => {
    setMillis(mintoMillis(minutes));
    if (millis === 0) {
      onEnd();
    }
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / mintoMillis(minutes));
  }, [millis]);
  useEffect(() => {
    if (isPasued) {
      if (interval.current) clearInterval(interval.current);

      return;
    }
    interval.current = setInterval(setCoundown, 1000);

    return () => clearInterval(interval.current);
  }, [isPasued]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizing.xxxl,
    fontWeight: 'bold',
    color: '#fff',
    padding: sizing.lg,
    backgroundColor: colors.container,
  },
});
