import React, { useState } from "react";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleLoanAmountChange = (e) => {
    setLoanAmount(parseFloat(e.target.value));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleLoanTermChange = (e) => {
    setLoanTerm(parseFloat(e.target.value));
  };

  const calculateMortgage = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    setTotalInterest(totalInterest);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="flex items-center justify-center text-7xl mt-5 font-bold uppercase">
        Loan Calculator
      </h1>
      <div className="text-2xl py-24 flex items-center justify-between rounded -mb-10 w-full">
        <div className="text-2xl">
          <label htmlFor="loanAmount">Loan Amount ($):</label>
          <input
            className="border border-indigo-600 rounded-md"
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
        </div>
        <div className="text-2xl">
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            className="border border-indigo-600 rounded-md"
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </div>
        <div className="text-2xl">
          <label htmlFor="loanTerm">Loan Term (years):</label>
          <input
            className="border border-indigo-600 rounded-md"
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={handleLoanTermChange}
          />
        </div>
      </div>
      <div className="w-full">
        <button
          className="bg-gray-900 text-white py-2 px-5 text-2xl rounded-full w-full"
          onClick={calculateMortgage}
        >
          Calculate
        </button>
      </div>
      <hr className="mt-5" />
      <div className="">
        <h2 className="text-center font-bold uppercase text-8xl mt-10">
          Results
        </h2>
        <div className="mt-10">
          <p className="text-5xl">
            Monthly Payment:{" "}
            <span className=" font-extrabold">
              ${monthlyPayment.toFixed(2)}
            </span>
          </p>
          <p className="text-5xl">
            Total Payment:{" "}
            <span className=" font-extrabold">${totalPayment.toFixed(2)}</span>
          </p>
          <p className="text-5xl">
            Total Interest Paid:{" "}
            <span className=" font-extrabold">${totalInterest.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MortgageCalculator;
