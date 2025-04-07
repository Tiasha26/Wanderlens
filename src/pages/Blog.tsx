import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Essential Photography Tips for Travel Bloggers',
    excerpt:
      'Learn the fundamental techniques to capture stunning travel photos that tell your story.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: 'Photography Tips',
    date: 'March 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Top 10 Hidden Gems in Southeast Asia',
    excerpt:
      'Discover lesser-known destinations that offer unique experiences and photo opportunities.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    category: 'Destinations',
    date: 'March 12, 2024',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'How to Edit Travel Photos Like a Pro',
    excerpt:
      'Master the art of post-processing to make your travel photos stand out.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    category: 'Photography Tips',
    date: 'March 10, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Travel Photography Gear',
    excerpt:
      'Find out what equipment you need for different types of travel photography.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    category: 'Equipment',
    date: 'March 8, 2024',
    readTime: '7 min read',
  },
]

const categories = ['All', 'Photography Tips', 'Destinations', 'Equipment']

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const bgColor = useColorModeValue('white', 'gray.800')

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <Container maxW="1200px" py={10}>
      <Box mb={10}>
        <Heading mb={4}>Travel & Photography Blog</Heading>
        <Text mb={6}>
          Discover tips, guides, and stories from travel photographers
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

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {filteredPosts.map((post) => (
          <Box
            key={post.id}
            bg={bgColor}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Image
              src={post.image}
              alt={post.title}
              w="100%"
              h="250px"
              objectFit="cover"
            />
            <Box p={6}>
              <HStack mb={2}>
                <Badge colorScheme="blue">{post.category}</Badge>
                <Text fontSize="sm" color="gray.500">
                  {post.date}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {post.readTime}
                </Text>
              </HStack>
              <Heading size="md" mb={2}>
                {post.title}
              </Heading>
              <Text color="gray.600" mb={4}>
                {post.excerpt}
              </Text>
              <Button colorScheme="blue" variant="outline">
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Blog 