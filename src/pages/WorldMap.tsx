import { Box, Container, Heading, Text, SimpleGrid, Image, useColorModeValue } from '@chakra-ui/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import { useEffect, useState } from 'react'

// Mock data for photo locations
const photoLocations = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    location: 'Swiss Alps',
    coordinates: [46.5, 8.0],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: 2,
    title: 'City Streets',
    location: 'Tokyo, Japan',
    coordinates: [35.6762, 139.6503],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
  },
  {
    id: 3,
    title: 'Beach Sunset',
    location: 'Bali, Indonesia',
    coordinates: [-8.4095, 115.1889],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: 4,
    title: 'Forest Path',
    location: 'Pacific Northwest',
    coordinates: [45.5155, -122.6789],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
  },
]

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const WorldMap = () => {
  const [isMounted, setIsMounted] = useState(false)
  const bgColor = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Container maxW="1200px" py={10}>
      <Box mb={10}>
        <Heading mb={4}>Photo Locations</Heading>
        <Text mb={6}>
          Explore where our photographers have captured their stunning images
        </Text>
      </Box>

      <Box
        h="600px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        mb={10}
      >
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {photoLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={customIcon}
            >
              <Popup>
                <Box>
                  <Image
                    src={location.image}
                    alt={location.title}
                    w="200px"
                    h="150px"
                    objectFit="cover"
                    borderRadius="md"
                    mb={2}
                  />
                  <Text fontWeight="bold">{location.title}</Text>
                  <Text fontSize="sm" color="gray.600">
                    {location.location}
                  </Text>
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {photoLocations.map((location) => (
          <Box
            key={location.id}
            bg={bgColor}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-5px)' }}
          >
            <Image
              src={location.image}
              alt={location.title}
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Box p={4}>
              <Text fontWeight="bold">{location.title}</Text>
              <Text fontSize="sm" color="gray.600">
                {location.location}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default WorldMap 