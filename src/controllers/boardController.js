import Board from "../models/Board";

export const homeController = async (req, res) => {
  try {
    const result = await Board.find().sort({ created: -1 });

    res.render("home", { boardList: result });
  } catch (e) {
    console.log(e);
    res.render("home", { boardList: [] });
  }
};

export const detailController = async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const result = await Board.findOne({ _id: id });

    res.render("detail", { data: result });
  } catch (e) {
    console.log(e);
    homeController(req, res);
  }
};

export const createController = (req, res) => {
  res.render("create");
};

export const createBoardController = async (req, res) => {
  const {
    body: { title, author, desc },
  } = req;

  try {
    const D = new Date();
    let year = D.getFullYear();
    let month = D.getMonth() + 1;
    let date = D.getDate();

    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;

    const resultDate = `${year}-${month}-${date}`;

    const result = await Board.create({
      title: title,
      description: desc,
      author: author,
      created: resultDate,
    });

    homeController(req, res);
  } catch (e) {
    console.log(e);
    homeController(req, res);
  }
};

export const editController = (req, res) => {
  res.render("edit");
};
