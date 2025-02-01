import categoryRepo from "../../repositories/adminRepos/categories-repo.js";
import { CategoriesDTO } from "../../DTOs/adminDTOs/categoriesDTO.js";

export const getCategories = async (req, res) => {
  try {
    await categoryRepo.getcategory(res);
  } catch (error) {
    res.status(500).json({ status: "Failed to get categories", error });
  }
};

export const createCategory = async (req, res) => {
  try {
    const categoryDTO = new CategoriesDTO(req.body);
    await categoryRepo.createCategory(categoryDTO, res);
  } catch (error) {
    res.status(500).json({ status: "Failed to create category", error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const categoryDTO = new CategoriesDTO(req.body);
    await categoryRepo.updateCategory(categoryDTO, res);
  } catch (error) {
    res.status(500).json({ status: "Failed to update category", error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const categoryDTO = new CategoriesDTO(req.body);
    await categoryRepo.deleteCategory(categoryDTO, res);
  } catch (error) {
    res.status(500).json({ status: "Failed to delete category", error });
  }
};