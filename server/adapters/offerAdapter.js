const cityCoordinates = {
  Paris: { latitude: 48.8566, longitude: 2.3522, zoom: 13 },
  Cologne: { latitude: 50.9375, longitude: 6.9603, zoom: 13 },
  Brussels: { latitude: 50.8503, longitude: 4.3517, zoom: 13 },
  Amsterdam: { latitude: 52.3676, longitude: 4.9041, zoom: 13 },
  Hamburg: { latitude: 53.5511, longitude: 9.9937, zoom: 13 },
  Dusseldorf: { latitude: 51.2277, longitude: 6.7735, zoom: 13 }
};

const getBaseUrl = () => {
  const host = process.env.HOST || 'http://localhost';
  const port = process.env.PORT || 5000;
  return `${host}:${port}`;
};

function buildUrl(path) {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const base = getBaseUrl();
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}

export function adaptOfferToClient(offer) {
  const cityLocation = cityCoordinates[offer.city] || { latitude: 0, longitude: 0, zoom: 10 };

  return {
    id: String(offer.id),
    title: offer.title,
    type: offer.type,
    price: offer.price,
    city: {
      name: offer.city,
      location: cityLocation
    },
    location: {
      latitude: offer.latitude,
      longitude: offer.longitude
    },
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: parseFloat(offer.rating),
    previewImage: buildUrl(offer.previewImage)
  };
}

export function adaptFullOfferToClient(offer) {
  const cityLocation = cityCoordinates[offer.city] || { latitude: 0, longitude: 0, zoom: 10 };

  return {
    id: String(offer.id),
    title: offer.title,
    description: offer.description,
    publishDate: offer.publishDate,
    city: {
      name: offer.city,
      location: cityLocation
    },
    location: {
      latitude: offer.latitude,
      longitude: offer.longitude
    },
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    rating: parseFloat(offer.rating),
    type: offer.type,
    rooms: offer.rooms,
    guests: offer.guests,
    price: offer.price,
    features: offer.features,
    commentsCount: offer.commentsCount,
    previewImage: buildUrl(offer.previewImage),
    photos: Array.isArray(offer.photos)
      ? offer.photos.map(buildUrl)
      : [],
    author: offer.author
      ? {
          id: String(offer.author.id),
          username: offer.author.username,
          email: offer.author.email,
          avatar: buildUrl(offer.author.avatar)
        }
      : null
  };
}