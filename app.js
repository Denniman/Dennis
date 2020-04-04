const data = [
    { principal: 2500, time: 1.8},
    { principal: 1000, time: 5},
    { principal: 3000, time: 1},
    { principal: 2000, time: 3}
  ];
  
  const interestCalculator = (data) => {
    return data.map((item) => {
      const { principal, time } = item;
      let rate = 0;
  
      switch (true) {
        case principal >= 2500 && time > 1 && time < 3:
          rate += 3;
          break;
  
        case principal >= 2500 && time >= 3:
          rate += 4;
          break;
  
        case principal < 2500 || time <= 1:
          rate += 2;
          break;
  
        default:
          rate += 2;
          break;
      }
  
      const interestData = {
        ...item,
        rate,
        interest: (principal * rate * time) / 100,
      };
  
      console.log(interestData);
  
      return;
    });
  };
  
  interestCalculator(data);