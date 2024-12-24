const category = require("../../model/category");
const fetchCategory = async (req, res) => {
  //res.json({msg:'success'});
  try {
    const data=await category.find();
    if(!data){
       return res.json({ msg: "no category found" }); 
    }
    res.json({ msg: "fetched successfully", data });
  } catch (error) {
    res.json({ msg: "error fetching category", error });
  }
};
module.exports = fetchCategory;