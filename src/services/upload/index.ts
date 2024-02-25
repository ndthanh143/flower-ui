import axiosInstance from '@/axios';
import { UploadFileResponse } from './types';

export const uploadService = {
  upload: async (file: File) => {
    const formData = new FormData();
    formData.append('files', file);

    const { data } = await axiosInstance.post<UploadFileResponse[]>('upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  },
};
