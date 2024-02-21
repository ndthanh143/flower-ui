import axiosInstance from '@/axios';
import { TCreateContactPayload } from './types';

export const contactService = {
  createContact: async (payload: TCreateContactPayload) => {
    await axiosInstance.post('/contacts', { data: payload });
  },
};
