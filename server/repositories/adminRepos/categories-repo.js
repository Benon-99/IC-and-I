import prisma from "../../database.js";

class CategoryRepository {
  async getcategory(res) {
    try {
      const response = await prisma.categories.findMany();
      res.status(200).json({ status: "All Categories!", response });
    } catch (error) {
      res.status(500).json({ status: "Couldn't find categories", error });
    }
  }

  async createCategory(categoryDTO, res) {
    try {
      // Create the category
      const response = await prisma.categories.create({
        data: {
          title: categoryDTO.title,
          description: categoryDTO.description,
          categorylink: categoryDTO.categorylink,
          overviewtitle: categoryDTO.overviewtitle,
          overviewcontent: categoryDTO.overviewcontent,
          status: categoryDTO.status,
          categoryId: categoryDTO.categoryId,
        },
      });


        res.status(201)
        .json({ status: "category created!", response });
    } catch (error) {
      // Handle errors
      res.status(500).json({ status: "Couldn't create category", error });
    }
  }

  async updateCategory(categoryDTO, res) {
    try {
      const response = await prisma.categories.update({
        data: categoryDTO,
        where: {
          id: categoryDTO.id,
        },
      });
      res.status(200).json({ status: "category updated!", response });
    } catch (error) {
      res.status(500).json({ status: "Couldn't update category", error });
    }
  }

  async deleteCategory(categoryDTO, res) {
    try {
      const response = await prisma.categories.delete({
        where: {
          id: categoryDTO.id,
        },
      });
      res.status(200).json({ status: "category deleted!", response });
    } catch (error) {
      res.status(500).json({ status: "Couldn't delete category", error });
    }
  }
}

export default new CategoryRepository();
