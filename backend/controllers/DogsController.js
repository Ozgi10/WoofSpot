import Dog from "../models/Dog.js";

export const getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json(dogs);
  } catch (error) {
    console.error("Error fetching all dogs:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const createDog = async (req, res) => {
  try {
    const newDog = new Dog(req.body);
    const savedDog = await newDog.save();
    res.status(201).json(savedDog);
  } catch (error) {
    console.error("Error creating dog:", error);
    res.status(400).send("Bad Request");
  }
};

export const getDogById = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    res.status(200).json(dog);
  } catch (error) {
    console.error("Error fetching dog by id:", error);
    res.status(500).send("Internal Server Error");
  }
};

export async function updateDogById(req, res) {
  try {
    const dog = await Dog.findById(req.params.id);

    if (!dog) {
      res.status(404).send("Dog not found");
      return;
    }

    Object.assign(dog, req.body);
    const updatedDog = await dog.save();

    res.status(200).json(updatedDog);
  } catch (error) {
    console.error("Error updating dog:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function deleteDogById(req, res) {
  try {
    const dog = await Dog.findByIdAndDelete(req.params.id);

    if (!dog) {
      res.status(404).send("Dog not found");
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting dog by id:", error);
    res.status(500).send("Internal Server Error");
  }
}
