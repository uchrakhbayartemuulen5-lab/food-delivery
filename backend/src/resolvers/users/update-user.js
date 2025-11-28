export const updateUser = async (req, res) => {
  const updatedUser = req.body;

  try {
    const newUser = await userModel.findByIdAndUpdate(
      updatedUser.id,
      updatedUser
    );
    res.status(200).send("New User Created Successfull!", newUser);
  } catch (error) {
    res.send("Error creating user: " + error);
  }
};
