import axios from "axios";

export const getAllProduct = async (pageNumber = 0, pageSize = 8) => {
  try {
    const response = await axios.get("http://localhost:8080/product", {
      params: {
        page: pageNumber, 
        size: pageSize,   
      },
    });
    return response.data;
  } catch (error) {
    console.error("Đã có lỗi xảy ra:", error);
  }
};
