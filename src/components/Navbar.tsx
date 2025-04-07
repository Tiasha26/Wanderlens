import { Box, Flex, Link, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="sm"
      zIndex="sticky"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        h="80px"
        align="center"
        justify="space-between"
      >
        <Link
          as={RouterLink}
          to="/"
          fontSize="2xl"
          fontWeight="bold"
          color="blue.500"
        >
          Wanderlens
        </Link>

        <Flex gap={8}>
          <Link as={RouterLink} to="/gallery" fontWeight="medium">
            Gallery
          </Link>
          <Link as={RouterLink} to="/blog" fontWeight="medium">
            Blog
          </Link>
          <Link as={RouterLink} to="/store" fontWeight="medium">
            Store
          </Link>
          <Link as={RouterLink} to="/world-map" fontWeight="medium">
            World Map
          </Link>
        </Flex>

        <Button colorScheme="blue" size="md">
          Sign In
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar 