import React, { useState } from 'react';
import {
  Box,
  HStack,
  useClipboard,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FaCheck, FaClone } from 'react-icons/fa';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const Codeblock = (props) => {
  const showLines = true;

  const { className, children, viewlines, metastring, ln, ...rest } = props;

  const [editorCode] = useState(children);

  const { hasCopied, onCopy } = useClipboard(editorCode);

  const language = className?.replace(/language-/, '');

  // const title = metastring?.match(/title="(.*?)"/)[1];

  return (
    <Box
      rounded="md"
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
      my={4}
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      {/* {title ? ( */}
      <HStack
        px={4}
        py={1}
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        {/* <Text
          fontSize="sm"
          fontWeight="500"
          color={useColorModeValue('gray.500', 'gray.300')}
        >
          {title}
        </Text> */}
        <IconButton
          size="sm"
          colorScheme="blue"
          onClick={onCopy}
          variant="ghost"
          aria-label="Copy code"
          color={
            hasCopied
              ? useColorModeValue('green.600', 'green.100')
              : useColorModeValue('gray.500', 'gray.300')
          }
          bg={
            hasCopied ? useColorModeValue('green.50', 'green.800') : undefined
          }
          icon={hasCopied ? <FaCheck /> : <FaClone />}
        />
      </HStack>
      {/* ) : undefined} */}
      <Box p="4" whiteSpace="break-spaces">
        <Highlight
          theme={theme}
          {...defaultProps}
          code={editorCode}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ whiteSpace: 'break-spaces' }}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Box>
    </Box>
  );
};

export default Codeblock;
