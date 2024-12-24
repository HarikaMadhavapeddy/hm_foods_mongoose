const foodItem = require("../../model/foodItem");
const fetchItems = require("./FetchItem");
const updateItems = async (req, res) => {
  //const { name, price, category, image, description } = req.body;
  console.log(req.body);
  try {
    const item = await foodItem.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true});
    if (!item) {
      return res.json({ msg: "item not found" });
    } else {
      res.json({ msg: "item updated successfully", updatedItem: item });
    }
  } catch (error) {
    res.json({ msg: "error updating item", error });
  }
};
module.exports=updateItems;
