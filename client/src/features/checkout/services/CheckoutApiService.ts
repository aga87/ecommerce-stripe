import { createApiInstance, getError } from '../../../libs/axios';

const getApiInstance = async () => {
  const baseURL = process.env.API_URL || 'http://localhost:5000/api/v1/';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  return createApiInstance(baseURL, headers);
};

export const CheckoutApiService = {
  getCheckoutURL: async (checkoutItems: CheckoutItem[]) => {
    try {
      const apiInstance = await getApiInstance();
      const res = await apiInstance.post('/checkout', { checkoutItems });
      const { url }: { url: string } = res.data;
      return { url, error: null };
    } catch (err) {
      return { url: null, error: getError(err) };
    }
  }
};
