const Article = require("../models/article");
const User = require("../models/user");

exports.list = async (req, res) => {
  try {
    const articles = await Article.find().populate("author");
    res.render("articleList", { articles, user: req.user });
  } catch (error) {
    console.error("Error listing articles:", error);
    res.status(500).send("Error loading articles");
  }
};

exports.myArticles = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("articles");
    res.render("myArticles", { articles: user.articles, user: req.user });
  } catch (error) {
    console.error("Error loading user articles:", error);
    res.status(500).send("Error loading your articles");
  }
};

exports.showForm = (req, res) => {
  res.render("articleForm", { user: req.user });
};

exports.create = async (req, res) => {
  try {
    const article = await Article.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: { articles: article._id }
    });

    res.redirect("/articles");
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).send("Error creating article");
  }
};

exports.delete = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).send("Article not found");
    }

    // Check if user is the author or an admin
    if (article.author.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).send("You don't have permission to delete this article");
    }

    await Article.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(article.author, {
      $pull: { articles: req.params.id }
    });

    res.redirect("/articles");
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).send("Error deleting article");
  }
};

exports.edit = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).send("Article not found");
    }

    // Check if user is the author
    if (article.author.toString() !== req.user.id) {
      return res.status(403).send("You don't have permission to edit this article");
    }

    res.render("editArticle", { article, user: req.user });
  } catch (error) {
    console.error("Error loading article for edit:", error);
    res.status(500).send("Error loading article");
  }
};

exports.update = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).send("Article not found");
    }

    // Check if user is the author
    if (article.author.toString() !== req.user.id) {
      return res.status(403).send("You don't have permission to edit this article");
    }

    await Article.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content
    });

    res.redirect("/articles");
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).send("Error updating article");
  }
};
