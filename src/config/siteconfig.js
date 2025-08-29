const siteConfig = {
  brand: {
    name: "Dolled Up",
    tagline: "Crafting beauty with passion and expertise"
  },
  colors: {
    primary: "rgb(255, 105, 180)",
    secondary: "#ff69b4",
    accent: "#f42e9b"
  },
  hero: {
    mainTitle: "BEAUTY",
    slides: [
      {
        text: "Timeless elegance meets modern sophistication",
        bgImage: "./src/images/1.png"
      },
      {
        text: "Where dreams become reality", 
        bgImage: "./src/images/2.png"
      },
      {
        text: "Crafting perfection for your special day",
        bgImage: "./src/images/3.jpg",
      },
      {
        text: "Every details tell your story",
        bgImage: "./src/images/4.png"
      },
      {
        text: "Crafting memories that last forever",
        bgImage: "./src/images/5.png"
      }
    ]
  },
  services: [
    {
      title: "Bridal Makeup",
      description: "Perfect wedding day look that lasts all day and photographs beautifully.",
      image: "https://images.unsplash.com/photo-1737515031439-2998a5bfcb6f?q=80&w=687"
    },
    // ... other services
  ],
  contact: {
    address: "123 Beauty Street, Cosmetic District, Makeup City, MC 12345",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 765-4321",
    email: "info@beautysalon.com",
    hours: "Mon-Fri: 9am - 8pm, Sat-Sun: 10am - 6pm"
  }
};

export default siteConfig;