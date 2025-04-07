import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'

// Mock data for store items
const storeItems = [
  {
    id: 1,
    title: 'Mountain Sunrise Print',
    description: 'High-quality print of a stunning mountain landscape',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    price: 49.99,
    type: 'Print',
    size: '24" x 36"',
  },
  {
    id: 2,
    title: 'City Streets Print',
    description: 'Vibrant urban photography print',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    price: 39.99,
    type: 'Print',
    size: '18" x 24"',
  },
  {
    id: 3,
    title: 'Travel Preset Pack',
    description: 'Collection of 10 professional travel photography presets',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    price: 29.99,
    type: 'Preset',
  },
  {
    id: 4,
    title: 'Nature Collection Print',
    description: 'Beautiful nature photography print',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    price: 44.99,
    type: 'Print',
    size: '20" x 30"',
  },
  {
    id: 5,
    title: 'Portrait Preset Pack',
    description: '5 presets optimized for travel portraits',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    price: 24.99,
    type: 'Preset',
  },
  {
    id: 6,
    title: 'Landscape Preset Pack',
    description: '8 presets for stunning landscape photography',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    price: 34.99,
    type: 'Preset',
  },
]

const Store = () => {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Container maxW="1200px" py={10}>
      <Box mb={10}>
        <Heading mb={4}>Photo Store</Heading>
        <Text mb={6}>
          Shop high-quality prints and professional photography presets
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {storeItems.map((item) => (
          <Box
            key={item.id}
            bg={bgColor}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Image
              src={item.image}
              alt={item.title}
              w="100%"
              h="250px"
              objectFit="cover"
            />
            <Box p={6}>
              <Badge colorScheme="blue" mb={2}>
                {item.type}
              </Badge>
              <Heading size="md" mb={2}>
                {item.title}
              </Heading>
              <Text color="gray.600" mb={4}>
                {item.description}
              </Text>
              {item.size && (
                <Text fontSize="sm" color="gray.500" mb={2}>
                  Size: {item.size}
                </Text>
              )}
              <HStack justify="space-between" align="center">
                <Text fontSize="xl" fontWeight="bold">
                  ${item.price}
                </Text>
                <Button colorScheme="blue">Add to Cart</Button>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Store 