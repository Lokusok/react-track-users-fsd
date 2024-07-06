import axios from 'axios';
import { IPaginationResponse, ISearchByOptions } from './types';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const httpClient = () => ({
  searchBy: async (options: ISearchByOptions) => {
    const response = await apiInstance.get<IPaginationResponse<IUser>>('', {
      params: {
        search: options.searchQuery,
        page: options.page,
      },
    });
    console.log('searchBy:', response);
    return response.data;
  },
  createUser: async (user: Omit<IUser, 'id'>) => {
    const response = await apiInstance.post<IUser>('', user);
    console.log('createUser:', response);
    return response.data;
  },
  deleteUser: async (userId: IUser['id']) => {
    const response = await apiInstance.delete<IUser>(userId);
    return response.data;
  },
  updateUser: async (user: IUser) => {
    const response = await apiInstance.put<IUser>(`/${user.id}`, user);
    return response.data;
  },
});

export default httpClient;
