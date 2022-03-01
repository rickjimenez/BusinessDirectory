import React, { FC } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { Spinner, Text } from '@ui-kitten/components';

interface Props {
  show: boolean;
  feedbackText?: string;
}

/**
 * This component shows loading feedback for the screens
 * @function Loading
 * @param {boolean} show - Shows the loading feedback
 * @param {string} feedbackText - Text to show in the loading feedback
 * @author Rich Jimenez <richjimenez@me.com>
 */
const Loading: FC<Props> = ({ show = false, feedbackText }): JSX.Element => {
  const scheme = useColorScheme();
  const bgStyle = scheme === 'dark' ? { backgroundColor: 'rgba(0,0,0,0.9)' } : { backgroundColor: 'rgba(255,255,255,0.9)' };

  if (show) {
    return (
      <View style={[styles.container, bgStyle]}>
        <Spinner size="giant" />
        {feedbackText && <Text style={styles.feedbackText}>{feedbackText}</Text>}
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    elevation: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackText: {
    marginTop: 10,
  },
});

export default Loading;
