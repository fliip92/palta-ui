import * as React from 'react';
import { PaltaProvider, Box, Text } from 'react-native-palta-ui';

export default function App() {
  return (
    <PaltaProvider>
      <Box flex={1} bg="white" margin={24} gap={10} paddingTop={25}>
        <Box
          flex={1}
          bg="green.200"
          borderRadius={20}
          flexDirection="row"
          padding={20}
        >
          <Box
            bg="green.300"
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <Text variant="small" color='primaryText'>Testing</Text>
          </Box>
          <Box bg="green.400" flex={1} />
          <Box bg="green.500" flex={1} />
        </Box>
        <Box
          flex={1}
          bg="blue.200"
          borderRadius={20}
          flexDirection="row"
          padding={20}
        >
          <Box bg="blue.300" flex={1} />
          <Box bg="blue.400" flex={1} />
          <Box bg="blue.500" flex={1} />
        </Box>
      </Box>
    </PaltaProvider>
  );
}
