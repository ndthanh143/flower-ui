import { configs } from '@/configs';
import axios from 'axios';

export const googleMapService = {
  getReviewsFromGoogleMap: async (placeId: string) => {
    const apiKey = configs.googleMapApi; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

    const { data } = await axios.get(url);

    return data.result;
  },
};
