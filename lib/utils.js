import { getItems } from "../services/itemService";

export const getPathsFromTitle = async () => {
  const items = await getItems();

  return items.map((item) => {
    return {
      params: { id: convertToPath(item.title) },
    };
  });
};

export const getItemData = async (id) => {
  const items = await getItems();
  const product = items.find((item) => convertToPath(item.title) === id);

  return {
    id: id,
    data: product,
  };
};

export const convertToPath = (title) => {
  return title.toLowerCase().replace(/\s/g, "-");
};
