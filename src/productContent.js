 const products = [
  //  Graphic Cards 
  {
    id: 1,
    title: "NVIDIA GeForce RTX 4090",
    description: "The ultimate flagship GPU with 24GB GDDR6X memory, designed for ultra gaming, advanced 3D rendering, and AI-driven creative workloads at top speed.",
    category: "Graphic cards",
    price: 2499,
    image: "/src/assets/imgs/GPU/NVIDIA GeForce RTX 4090.jpg"
  },
  {
    id: 2,
    title: "AMD Radeon RX 7900 XT",
    description: "High-end gaming graphics card with RDNA 3 architecture, 20GB of memory, and powerful performance for smooth gameplay and heavy creative projects.",
    category: "Graphic cards",
    price: 1199,
    image: "/src/assets/imgs/GPU/AMD Radeon RX 7900 XT.jpg"
  },
  {
    id: 3,
    title: "NVIDIA GeForce RTX 4070 Ti",
    description: "Perfect balance for 1440p gaming with DLSS 3 support, ensuring smooth frame rates, next-gen visuals, and efficiency for gamers and creators alike.",
    category: "Graphic cards",
    price: 799,
    image: "/src/assets/imgs/GPU/NVIDIA GeForce RTX 4070 Ti.webp"
  },
  {
    id: 4,
    title: "AMD Radeon RX 6800",
    description: "Equipped with 16GB GDDR6 memory, this GPU delivers high-resolution 4K gaming, strong ray tracing capabilities, and reliable performance under load.",
    category: "Graphic cards",
    price: 699,
    image: "/src/assets/imgs/GPU/AMD Radeon RX 6800.jpg"
  },
  {
    id: 5,
    title: "NVIDIA GeForce RTX 3060",
    description: "Affordable and efficient 12GB graphics card, providing solid performance for gamers on a budget, with support for ray tracing and creative workflows.",
    category: "Graphic cards",
    price: 349,
    image: "/src/assets/imgs/GPU/NVIDIA GeForce RTX 3060.jpg"
  },

  // Laptops
  {
    id: 6,
    title: "Apple MacBook Pro 16” M3 Pro",
    description: "Powerful professional laptop with Apple M3 Pro chip, 18GB RAM, stunning Retina XDR display, long battery life, and excellent performance for creators.",
    category: "Laptops",
    price: 2899,
    image: "/src/assets/imgs/laptops/Apple MacBook Pro 16 M3 Pro.jpg"
  },
  {
    id: 7,
    title: "Dell XPS 15",
    description: "Premium ultrabook featuring a 4K OLED display, Intel Core i7 13th Gen CPU, excellent build quality, and performance for both productivity and gaming.",
    category: "Laptops",
    price: 1899,
    image: "/src/assets/imgs/laptops/Dell XPS 15.jpg"
  },
  {
    id: 8,
    title: "ASUS ROG Zephyrus G14",
    description: "Compact yet powerful gaming laptop equipped with Ryzen 9 and RTX 4070 GPU, offering high frame rates, stylish design, and portability for gamers.",
    category: "Laptops",
    price: 1699,
    image: "/src/assets/imgs/laptops/ASUS ROG Zephyrus G14.jpg"
  },
  {
    id: 9,
    title: "Lenovo ThinkPad X1 Carbon",
    description: "Ultra-light business laptop with a carbon fiber chassis, 16GB RAM, long-lasting battery, and enterprise-grade durability designed for professionals.",
    category: "Laptops",
    price: 1599,
    image: "/src/assets/imgs/laptops/Lenovo ThinkPad X1 Carbon.jpg"
  },
  {
    id: 10,
    title: "HP Spectre x360",
    description: "Convertible 2-in-1 laptop featuring a bright touchscreen display, Intel Evo certification, premium build, and versatile design for work and creativity.",
    category: "Laptops",
    price: 1399,
    image: "/src/assets/imgs/laptops/HP Spectre x360.jpg"
  },
  {
    id: 11,
    title: "Razer Blade 15",
    description: "Sleek high-performance gaming laptop with RTX 4080 GPU, 240Hz QHD display, premium aluminum chassis, and the power to handle AAA games smoothly.",
    category: "Laptops",
    price: 2499,
    image: "/src/assets/imgs/laptops/Razer Blade 15.jpg"
  },

  // Monitors
  {
    id: 12,
    title: "Samsung Odyssey G9",
    description: "Massive 49-inch curved ultra-wide QLED gaming monitor, delivering immersive visuals, HDR support, and smooth action for a next-level gaming setup.",
    category: "Monitors",
    price: 1399,
    image: "/src/assets/imgs/monitors/Samsung Odyssey G9.jpg"
  },
  {
    id: 13,
    title: "LG UltraFine 5K",
    description: "Professional 27-inch 5K monitor with 5120x2880 resolution, vibrant colors, sharp details, and excellent choice for photographers and video editors.",
    category: "Monitors",
    price: 1299,
    image: "/src/assets/imgs/monitors/LG UltraFine 5K.jpg"
  },
  {
    id: 14,
    title: "ASUS TUF Gaming 27”",
    description: "Durable 27-inch IPS gaming monitor with 144Hz refresh rate, Adaptive Sync, and vivid color accuracy for smooth competitive and casual gameplay.",
    category: "Monitors",
    price: 399,
    image: "/src/assets/imgs/monitors/ASUSTUFGaming27.webp"
  },
  {
    id: 15,
    title: "Dell UltraSharp 32”",
    description: "Large 32-inch UHD 4K monitor built for designers and developers, offering accurate color reproduction, slim bezels, and sharp detail for creative work.",
    category: "Monitors",
    price: 799,
    image: "/src/assets/imgs/monitors/Dell UltraSharp 32.png"
  },

  // Power Supply 
  {
    id: 16,
    title: "Corsair RM850x",
    description: "Reliable 850W fully modular PSU with 80+ Gold certification, quiet operation, and premium build quality designed for gaming and workstation systems.",
    category: "Power supply",
    price: 179,
    image: "/src/assets/imgs/powerSupply/Corsair RM850x.jpg"
  },
  {
    id: 17,
    title: "Seasonic Prime TX-1000",
    description: "1000W Titanium certified power supply delivering premium efficiency, durability, rock-solid voltage regulation, and ultra-quiet fan performance.",
    category: "Power supply",
    price: 299,
    image: "/src/assets/imgs/powerSupply/Seasonic Prime TX-1000.jpg"
  },
  {
    id: 18,
    title: "EVGA SuperNOVA 750 G5",
    description: "750W modular PSU with compact design, silent cooling, and efficiency built for stable performance in gaming PCs and demanding workstation builds.",
    category: "Power supply",
    price: 139,
    image: "/src/assets/imgs/powerSupply/EVGA SuperNOVA 750 G5.jpg"
  }
];
export default products