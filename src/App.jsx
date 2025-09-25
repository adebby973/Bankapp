import { useState } from "react";
import "./App.css";
import { HiCash } from "react-icons/hi";
import { PiHandWithdraw } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
export default function App() {
  const [showDeposit, setShowDepositinput] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [balance, setBalance] = useState(50);
  const [showWithraw, setShowWithraw] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isLoanActive, setIsLoanActive] = useState(false);
  const LOAN_AMOUNT = 1500;

  function handleDeposit() {
    if (depositAmount > 100000000) {
      alert("cannot deposit");
    } else {
      setBalance(balance + Number(depositAmount));
    }
    setShowDepositinput(false);
    setDepositAmount("");
  }
  function handleWithrawal() {
    if (withdrawAmount > balance) {
      alert("balance is low");
    } else {
      setBalance(balance - Number(withdrawAmount));
    }
    setShowWithraw(false);
    setWithdrawAmount("");
  }
  function handleLoan() {
    if (isLoanActive) {
      if (balance < 1500) {
        alert("insuficient balance");
      } else {
        setBalance(balance - LOAN_AMOUNT);
        setIsLoanActive(false);
      }
    } else {
      setBalance(balance + LOAN_AMOUNT);
      setIsLoanActive(true);
    }
  }
  // function withdrawalLimit() {
  //   if (setShowWithraw((prev) => !prev)) {

  //   }
  // }
  return (
    <div className="app">
      <h1>BankApp</h1>
      <div className="screen">
        <h4> welcome tomisin, </h4>
        <h2>${balance.toFixed(2).toLocaleString()}</h2>
      </div>
      <div className="action">
        <button
          type="button"
          onClick={() => setShowDepositinput((prev) => !prev)}
        >
          <HiCash />
        </button>
        <button type="button" onClick={() => setShowWithraw((prev) => !prev)}>
          <PiHandWithdraw />
        </button>
        <button type="button" onClick={() => handleLoan()}>
          {isLoanActive ? <GiPayMoney /> : <FaMoneyBillAlt />}
        </button>
      </div>
      {showDeposit && (
        <div className="input_container">
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <button type="button" onClick={() => handleDeposit()}>
            deposit
          </button>
        </div>
      )}

      {showWithraw && (
        <div className="input_container">
          <input
            type="number"
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <button onClick={() => handleWithrawal()}>withdrawal</button>
        </div>
      )}
    </div>
  );
}
