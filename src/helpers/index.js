const formatMoney = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(value);
};

// const calculateTotalDue = (quantity, deadline) => {
//   let total;

//   // mientras mayor es la cantidad, menor es el interés
//   if (quantity < 5000) {
//     total = quantity * 1.5;
//   } else if (quantity >= 5000 && quantity < 10000) {
//     total = quantity * 1.4;
//   } else if (quantity >= 10000 && quantity < 15000) {
//     total = quantity * 1.3;
//   } else {
//     total = quantity * 1.2;
//   }

//   // plazo - más plazo, mayor interés
//   if (deadline === 6) {
//     total *= 1.1;
//   } else if (deadline === 12) {
//     total *= 1.2;
//   } else {
//     total *= 1.3;
//   }

//   return total;
// };

const calculateTotalDue = (quantity, deadline) => {
  const interestRates = [
    { max: 5000, rate: 1.5 },
    { max: 10000, rate: 1.4 },
    { max: 15000, rate: 1.3 },
    { max: Infinity, rate: 1.2 },
  ];

  const deadlineMultipliers = {
    6: 1.1,
    12: 1.2,
    default: 1.3,
  };

  const interestRate = interestRates.find((rate) => quantity < rate.max).rate;
  const deadlineMultiplier =
    deadlineMultipliers[deadline] || deadlineMultipliers.default;

  return quantity * interestRate * deadlineMultiplier;
};

export { formatMoney, calculateTotalDue };
