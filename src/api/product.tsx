import axios from "axios";

interface ProductListModel {
  id: string;
  name: string;
  price: number;

}

const getData = async (): Promise<ProductListModel[]> => {
  const response = await axios.get<ProductListModel[]>('https://aws.amazon.com/what-is/api/');
  return response.data;
};