const foodItem=require('../../model/foodItem');
const addItem = async (req, res) => {
  const { name, price, category, image, description } = req.body;
  try {
    const AddDataToDb = new foodItem({ name, price, category, image, description });
    console.log(AddDataToDb);
    await AddDataToDb.save();
    res.json({ msg: "data added successfully", AddDataToDb });
  } catch (error) {
    res.json({ error });
  }
};
module.exports = addItem;