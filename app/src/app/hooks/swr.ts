import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
// Получение товара
const useGetProducts = (uuid?: string | null) => useSWR(`/api/products/`, fetcher);

export {
    useGetProducts,
};