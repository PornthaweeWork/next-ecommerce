import axios from "axios";

export interface CategoriesModel {
  id: string;
  name: string;
  permalink: string;
  parentId: string;
}


export default async function getCategories() {
  try {
    const response = await axios.get('https://api.storefront.wdb.skooldio.dev/categories');
    return response.data;
  } catch (error) {
    console.error('getCategories', error);
  }
}
