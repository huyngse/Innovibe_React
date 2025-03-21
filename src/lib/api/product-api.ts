import { axiosClient } from "./config/axios-client";

export const handleApiError = (error: any) => {
  try {
    const errorMessage = error.response?.data.message || error?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
};

export const getAllProduct = async () => {
  try {
    const { data } = await axiosClient.get(`/api/products`);
    return { error: null, data: data, success: true };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data } = await axiosClient.get(`/api/products/${id}`);
    return { error: null, data: data, success: true };
  } catch (error) {
    return handleApiError(error);
  }
};
export const searchProductsByValue = async (searchValue: string) => {
  try {
    const queryParams: Record<string, any> = { SearchValue: searchValue };

    const { data } = await axiosClient.get(`/api/products/search`, {
      params: queryParams,
    });

    return { error: null, data: data, success: true };
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchProducts = async (
  brandName?: string,
  categoryName?: string,
  pageNumber?: number,
  pageSize?: number
) => {
  try {
    const queryParams: Record<string, any> = {};

    if (brandName) queryParams.BrandName = brandName;
    if (categoryName) queryParams.CategoryName = categoryName;
    if (pageNumber !== undefined) queryParams.PageNumber = pageNumber;
    if (pageSize !== undefined) queryParams.PageSize = pageSize;

    const { data } = await axiosClient.get(`/api/products/search`, {
      params: queryParams,
    });

    return { error: null, data: data, success: true };
  } catch (error) {
    return handleApiError(error);
  }
};
