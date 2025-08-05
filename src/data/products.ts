import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16" M3 Max',
    category: 'laptop',
    price: 8500000,
    originalPrice: 9700000,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'Apple',
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    isOnSale: true,
    specifications: {
      'Processor': 'Apple M3 Max 12-core CPU',
      'Memory': '32GB Unified Memory',
      'Storage': '1TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Graphics': '38-core GPU',
      'Battery': 'Up to 22 hours',
      'Weight': '4.7 lbs (2.16 kg)',
      'OS': 'macOS Sonoma'
    },
    description: 'The most powerful MacBook Pro ever built for professionals who demand the ultimate in performance and capability.',
    features: [
      'M3 Max chip with 12-core CPU and 38-core GPU',
      'Liquid Retina XDR display with 1000 nits sustained brightness',
      'Advanced camera and audio for video calls',
      'All-day battery life up to 22 hours',
      'Extensive connectivity including Thunderbolt 4'
    ]
  },
  {
    id: '2',
    name: 'Dell XPS 13 Plus',
    category: 'laptop',
    price: 3200000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'Dell',
    rating: 4.5,
    reviews: 892,
    inStock: true,
    isOnSale: false,
    specifications: {
      'Processor': 'Intel Core i7-1360P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB PCIe NVMe SSD',
      'Display': '13.4" OLED 3.5K Touch',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 12 hours',
      'Weight': '2.73 lbs (1.24 kg)',
      'OS': 'Windows 11 Home'
    },
    description: 'Premium ultrabook with stunning OLED display and cutting-edge design for modern professionals.',
    features: [
      '13.4" OLED 3.5K InfinityEdge touch display',
      'Invisible haptic touchpad',
      'Capacitive function row',
      'Premium machined aluminum construction',
      'Thunderbolt 4 ports'
    ]
  },
  {
    id: '3',
    name: 'ASUS ROG Strix G16',
    category: 'gaming',
    price: 4700000,
    originalPrice: 5400000,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'ASUS',
    rating: 4.7,
    reviews: 634,
    inStock: true,
    isOnSale: true,
    specifications: {
      'Processor': 'Intel Core i7-13650HX',
      'Memory': '16GB DDR5-4800',
      'Storage': '1TB PCIe 4.0 NVMe SSD',
      'Display': '16" QHD+ 240Hz',
      'Graphics': 'NVIDIA RTX 4060 8GB',
      'Battery': 'Up to 8 hours',
      'Weight': '5.51 lbs (2.5 kg)',
      'OS': 'Windows 11 Home'
    },
    description: 'High-performance gaming laptop designed for competitive gaming and content creation.',
    features: [
      'NVIDIA GeForce RTX 4060 with 8GB GDDR6',
      '240Hz QHD+ display with 3ms response time',
      'Intelligent cooling with liquid metal thermal compound',
      'RGB backlit keyboard with Aura Sync',
      'Wi-Fi 6E and Bluetooth 5.3'
    ]
  },
  {
    id: '4',
    name: 'iMac 24" M3',
    category: 'desktop',
    price: 4200000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'Apple',
    rating: 4.9,
    reviews: 2156,
    inStock: true,
    isOnSale: false,
    specifications: {
      'Processor': 'Apple M3 8-core CPU',
      'Memory': '16GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '24" 4.5K Retina',
      'Graphics': '10-core GPU',
      'Camera': '1080p FaceTime HD',
      'Audio': 'Six-speaker system',
      'Connectivity': 'Wi-Fi 6E, Bluetooth 5.3'
    },
    description: 'Stunningly thin all-in-one desktop with brilliant 4.5K Retina display and powerful M3 chip.',
    features: [
      '24-inch 4.5K Retina display with P3 wide color',
      'Apple M3 chip with 8-core CPU and 10-core GPU',
      '1080p FaceTime HD camera with advanced image signal processor',
      'Studio-quality three-mic array',
      'Color-matched Magic Keyboard and Magic Mouse'
    ]
  },
  {
    id: '5',
    name: 'Custom Gaming PC - RTX 4080',
    category: 'desktop',
    price: 7200000,
    originalPrice: 8200000,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'Member Tech Custom',
    rating: 4.8,
    reviews: 445,
    inStock: true,
    isOnSale: true,
    specifications: {
      'Processor': 'AMD Ryzen 7 7800X3D',
      'Memory': '32GB DDR5-5600',
      'Storage': '2TB NVMe Gen4 SSD',
      'Graphics': 'NVIDIA RTX 4080 16GB',
      'Motherboard': 'ASUS ROG Strix X670E-E',
      'PSU': '850W 80+ Gold Modular',
      'Cooling': 'AIO 360mm RGB Cooler',
      'Case': 'Fractal Design Define 7'
    },
    description: 'Ultimate gaming desktop built with premium components for 4K gaming and content creation.',
    features: [
      'AMD Ryzen 7 7800X3D - Best gaming CPU',
      'NVIDIA RTX 4080 16GB for 4K gaming',
      '32GB high-speed DDR5 memory',
      '2TB ultra-fast NVMe Gen4 storage',
      'Premium RGB lighting and tempered glass'
    ]
  },
  {
    id: '6',
    name: 'Logitech MX Master 3S',
    category: 'accessories',
    price: 245000,
    originalPrice: 320000,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'Logitech',
    rating: 4.6,
    reviews: 3421,
    inStock: true,
    isOnSale: true,
    specifications: {
      'Sensor': 'Darkfield high precision',
      'DPI': 'Up to 8000 DPI',
      'Buttons': '7 customizable buttons',
      'Battery': 'Up to 70 days',
      'Connectivity': 'USB-C, Bluetooth, Unifying',
      'Compatibility': 'Windows, macOS, Linux',
      'Weight': '141g',
      'Dimensions': '124.9 × 84.3 × 51mm'
    },
    description: 'Advanced wireless mouse designed for power users with precision tracking and customizable controls.',
    features: [
      'MagSpeed electromagnetic scrolling',
      'Darkfield sensor works on any surface',
      'USB-C quick charging',
      'Flow cross-computer control',
      'Quiet clicks and premium build quality'
    ]
  },
  {
    id: '7',
    name: 'NVIDIA RTX 4090',
    category: 'components',
    price: 3950000,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'NVIDIA',
    rating: 4.9,
    reviews: 1876,
    inStock: false,
    isOnSale: false,
    specifications: {
      'GPU': 'AD102',
      'CUDA Cores': '16384',
      'Memory': '24GB GDDR6X',
      'Memory Bus': '384-bit',
      'Base Clock': '2230 MHz',
      'Boost Clock': '2520 MHz',
      'TDP': '450W',
      'Outputs': '3x DP 1.4a, 1x HDMI 2.1'
    },
    description: 'The ultimate graphics card for 4K gaming, content creation, and AI workloads.',
    features: [
      'Ada Lovelace architecture',
      '24GB GDDR6X memory for large datasets',
      'DLSS 3 with Frame Generation',
      'Ray tracing performance leadership',
      'AV1 encoding for content creators'
    ]
  },
  {
    id: '8',
    name: 'Samsung Odyssey G9 49"',
    category: 'accessories',
    price: 3200000,
    originalPrice: 4200000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    brand: 'Samsung',
    rating: 4.4,
    reviews: 892,
    inStock: true,
    isOnSale: true,
    specifications: {
      'Size': '49" Curved',
      'Resolution': '5120 x 1440 (DQHD)',
      'Refresh Rate': '240Hz',
      'Response Time': '1ms GTG',
      'Panel': 'VA with Quantum Dot',
      'Curvature': '1000R',
      'HDR': 'HDR10+',
      'Connectivity': '2x HDMI 2.1, 1x DP 1.4'
    },
    description: 'Ultra-wide curved gaming monitor that wraps around your field of view for immersive gaming.',
    features: [
      '49" ultra-wide curved display',
      '240Hz refresh rate with 1ms response',
      'Quantum Dot technology for vivid colors',
      'G-Sync and FreeSync Premium Pro',
      'Infinity Core lighting design'
    ]
  }
];