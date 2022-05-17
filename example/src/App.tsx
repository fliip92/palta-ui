import * as React from 'react';

import { multiply, Box, Text, Palta, Button } from 'react-native-palta-ui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <Palta>
      <Box
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="backgrounds.primary"
        margin={10}
      >
        <Text color="black" variant="large">
          Result: {result}
        </Text>
        <Text color="black" variant="medium">
          Result: {result}
        </Text>
        <Text color="black" variant="small">
          Result: {result}
        </Text>
        <Text color="black" variant="micro" textAlign="right">
          asdasdasd asdasd
        </Text>
        <Box
          borderBottomLeftRadius={10}
          borderTopRightRadius={10}
          padding={10}
          bg="red.500"
          shadowColor={'black'}
          shadowOffset={{
            height: 3,
            width: 1,
          }}
          shadowRadius={2}
          shadowOpacity={1}
        >
          <Text color="white" variant="micro" fontWeight="300">
            Result: {result}
          </Text>
        </Box>
        <Box marginTop={10} width={1}>
          <Button variant="solid" colorScheme="green">
            button
          </Button>
          <Box height={10} />
          <Button variant="outline" colorScheme="green">
            button
          </Button>
          <Box height={10} />
          <Button variant="solid" colorScheme="blue">
            button
          </Button>
          <Box height={10} />
          <Button variant="solid" colorScheme="grey">
            button
          </Button>
          <Box height={10} />
          <Button variant="solid" colorScheme="red">
            button
          </Button>
        </Box>
      </Box>
    </Palta>
  );
}
