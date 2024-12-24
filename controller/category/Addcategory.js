const category = require("../../model/category");
const addCategory = async (req, res) => {
  //res.json({msg:'success'});
  try {
    const newcategory = new category(req.body);
    console.log(newcategory);
    await newcategory.save();
    res.json({ msg: "new category added successfully", newcategory });
  } catch (error) {
    res.json({ msg: "error adding category", error });
  }
};
module.exports = addCategory;
