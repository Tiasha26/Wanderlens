import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

// Mock data for gallery items
const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Mountain Sunrise',
    category: 'Landscape',
    location: 'Swiss Alps',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    title: 'City Streets',
    category: 'Urban',
    location: 'Tokyo, Japan',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    title: 'Beach Sunset',
    category: 'Nature',
    location: 'Bali, Indonesia',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    title: 'Forest Path',
    category: 'Nature',
    location: 'Pacific Northwest',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    title: 'Ocean Waves',
    category: 'Nature',
    location: 'Hawaii, USA',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
    title: 'Desert Dunes',
    category: 'Landscape',
    location: 'Sahara Desert',
  },
]

const categories = ['All', 'Landscape', 'Nature', 'Urban']

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const bgColor = useColorModeValue('white', 'gray.800')

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <Container maxW="1200px" py={10}>
      <Box mb={10}>
        <Heading mb={4}>Photo Gallery</Heading>
        <Text mb={6}>
          Explore stunning travel photography from around the world
        </Text>
        <HStack spacing={4}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'solid' : 'outline'}
              colorScheme="blue"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </HStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {filteredItems.map((item) => (
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
              h="300px"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading size="md" mb={2}>
                {item.title}
              </Heading>
              <Text color="gray.500">{item.location}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Gallery 