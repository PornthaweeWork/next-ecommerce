import { CategoriesModel } from "@/api/product";
interface Category {
  id: string;
  title: string;
  contents: { value: string; label: string }[];
}

const transformCategories = (data: CategoriesModel[]): Category[] => {
  const categories: { [key: string]: Category } = {};

  for (const item of data) {
    const parentId = item.parentId;
    if (!parentId) {
      // Top-level category
      categories[item.id] = {
        id: item.id,
        title: item.name,
        contents: [
          {
            value: item.permalink,
            label: item.name,
          },
        ],
      };
    }
  }

  for (const item of data) {
    const parentId = item.parentId;
    if (parentId) {
      // Sub-category
      categories[parentId].contents.push({
        value: item.permalink,
        label: item.name,
      });
    }
  }

  return Object.values(categories);
};

export default transformCategories;