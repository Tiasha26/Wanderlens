import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box>
      {/* Hero Section */}
      <Box
        h="90vh"
        bgImage="url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3')"
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.600"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Container maxW="1200px">
            <VStack spacing={8} align="center" color="white">
              <Heading size="2xl">Capture the World's Beauty</Heading>
              <Text fontSize="xl" textAlign="center" maxW="600px">
                Join our community of travel photographers and share your stories
                through stunning imagery
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/gallery"
                  size="lg"
                  colorScheme="blue"
                >
                  Explore Gallery
                </Button>
                <Button
                  as={RouterLink}
                  to="/blog"
                  size="lg"
                  variant="outline"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Read Blog
                </Button>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* Featured Sections */}
      <Container maxW="1200px" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Featured Gallery */}
          <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Gallery"
              borderRadius="md"
              mb={4}
            />
            <Heading size="md" mb={2}>
              Featured Gallery
            </Heading>
            <Text mb={4}>
              Discover breathtaking travel photography from around the world
            </Text>
            <Button as={RouterLink} to="/gallery" colorScheme="blue">
              View Gallery
            </Button>
          </Box>

          {/* Latest Blog Posts */}
          <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Blog"
              borderRadius="md"
              mb={4}
            />
            <Heading size="md" mb={2}>
              Latest Blog Posts
            </Heading>
            <Text mb={4}>
              Read travel tips and photography guides from our experts
            </Text>
            <Button as={RouterLink} to="/blog" colorScheme="blue">
              Read Blog
            </Button>
          </Box>

          {/* Featured Prints */}
          <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
              alt="Store"
              borderRadius="md"
              mb={4}
            />
            <Heading size="md" mb={2}>
              Featured Prints
            </Heading>
            <Text mb={4}>
              Shop high-quality prints of our most popular photographs
            </Text>
            <Button as={RouterLink} to="/store" colorScheme="blue">
              Visit Store
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Home 