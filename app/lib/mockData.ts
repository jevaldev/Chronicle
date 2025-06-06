export const reviews = [
  {
    id: "rev_001",
    userId: "user_123",
    image:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=800&q=60",
    title: "Inception",
    description:
      "Una película de ciencia ficción que desafía la realidad y explora el mundo de los sueños.",
    rating: 4.5,
    createdAt: "2025-06-04T12:00:00Z",
  },
  {
    id: "rev_002",
    userId: "user_456",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    title: "The Witcher",
    description:
      "Una serie de fantasía épica llena de magia, monstruos y aventuras.",
    rating: 4.0,
    createdAt: "2025-06-03T18:45:00Z",
  },
  {
    id: "rev_003",
    userId: "user_789",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "Videojuego de mundo abierto donde la exploración y la aventura son clave.",
    rating: 5.0,
    createdAt: "2025-06-02T20:10:00Z",
  },
];

export const contentLists = [
  {
    id: "list_001",
    userId: "user_123",
    name: "Películas para ver",
    items: [
      {
        contentId: "movie_001",
        title: "Interstellar",
        image:
          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
      },
      {
        contentId: "movie_002",
        title: "Matrix",
        image:
          "https://images.unsplash.com/photo-1747635351683-002a277ed3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      },
    ],
    createdAt: "2025-06-01T10:00:00Z",
  },
  {
    id: "list_002",
    userId: "user_456",
    name: "Series favoritas",
    items: [
      {
        contentId: "series_001",
        title: "Breaking Bad",
        image:
          "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=60",
      },
      {
        contentId: "series_002",
        title: "Dark",
        image:
          "https://images.unsplash.com/photo-1609931174345-7eeebfb4b0d3?auto=format&fit=crop&w=800&q=60",
      },
    ],
    createdAt: "2025-05-25T14:00:00Z",
  },
];

export const users = [
  {
    id: "user_123",
    username: "CineFan88",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Amante del cine de ciencia ficción y aventuras.",
    joinedAt: "2024-05-01T10:00:00Z",
  },
  {
    id: "user_456",
    username: "PixelQueen",
    avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Fan de los videojuegos indie y las series.",
    joinedAt: "2024-03-12T15:30:00Z",
  },
  {
    id: "user_789",
    username: "SeriesHunter",
    avatarUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Buscando siempre la próxima serie de culto.",
    joinedAt: "2024-06-20T19:45:00Z",
  },
];
