exports.calculator = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      error: "Body cannot be empty",
    });
  } else {
    let { smallDogs, mediumDogs, largeDogs, leftOverFood } = req.body;
    const maxAllowedDogs = 30;
    let totalDogs = 0;
    smallDogs === "" ? (smallDogs = 0) : smallDogs;
    mediumDogs === "" ? (mediumDogs = 0) : mediumDogs;
    largeDogs === "" ? (largeDogs = 0) : largeDogs;
    leftOverFood === "" ? (leftOverFood = 0) : leftOverFood;
    try {
      if (
        isNaN(parseInt(smallDogs)) ||
        isNaN(parseInt(mediumDogs)) ||
        isNaN(parseInt(largeDogs)) ||
        isNaN(parseInt(leftOverFood))
      ) {
        throw "Value Not A Number";
      }
      totalDogs =
        parseInt(smallDogs) + parseInt(mediumDogs) + parseInt(largeDogs);
    } catch (e) {
      return res.status(400).json({
        error: "Please enter only numbers",
      });
    }
    if (totalDogs > maxAllowedDogs) {
      response = {
        error: "There are too many dogs!",
      };
      return res.status(400).json(response);
    } else if (
      smallDogs < 0 ||
      mediumDogs < 0 ||
      largeDogs < 0 ||
      leftOverFood < 0
    ) {
      response = {
        error: "Please enter only positive numbers",
      };
      return res.status(400).json(response);
    } else if (totalDogs === 0) {
      response = {
        error: "There are no dogs!",
      };
      return res.status(400).json(response);
    } else {
      // food needs in lb
      const smallDogNeed = 10;
      const mediumDogNeed = 20;
      const largeDogNeed = 30;
      const extraFoodPercent = 20;

      const minimumFoodRequired =
        parseInt(smallDogs) * smallDogNeed +
        parseInt(mediumDogs) * mediumDogNeed +
        parseInt(largeDogs) * largeDogNeed;

      console.log("Calculating Food Supply");
      let foodToOrder =
        minimumFoodRequired -
        leftOverFood +
        (minimumFoodRequired - leftOverFood) * (extraFoodPercent / 100);
      console.log(
        `${minimumFoodRequired} - ${leftOverFood} + ((${minimumFoodRequired} - ${leftOverFood}) * ${
          extraFoodPercent / 100
        })`
      );
      // Round to single decimal
      foodToOrder = foodToOrder < 0 ? 0 : Math.round(foodToOrder * 10) / 10;
      response = {
        result: foodToOrder,
      };
      return res.status(200).json(response);
    }
  }
};
