import { useState } from "react";
import { Header, Button } from "./components";
import { calculateTotalDue, formatMoney } from "./helpers";
import { showAlert } from "./config/swalConfig";
import { useEffect } from "react";

const MAX_QUANTITY = 20000;
const MIN_QUANTITY = 1000;
const RANGE_STEP = 100;

function App() {
  const [quantity, setQuantity] = useState(10000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);

  useEffect(() => {
    setTotal(calculateTotalDue(quantity, months));
  }, [quantity, months]);

  useEffect(() => {
    setPayment(total / months);
  }, [total, months]);

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleClickDecrease = () => {
    if (quantity <= MIN_QUANTITY) {
      showAlert("Excediste la cantidad minima");
      return;
    }
    setQuantity(quantity - RANGE_STEP);
  };

  const handleClickIncrease = () => {
    if (quantity >= MAX_QUANTITY) {
      showAlert("Excediste la cantidad máxima");
      return;
    }
    setQuantity(quantity + RANGE_STEP);
  };

  return (
    <div className="flex flex-col gap-y-6 my-20 max-w-lg mx-auto bg-white shadow-sm p-10">
      <Header />

      <div className="flex justify-between my-16">
        <Button handleClick={handleClickDecrease} description={"-"} />

        <p className="text-center text-5xl font-extrabold text-bondi">
          {formatMoney(quantity)}
        </p>

        <Button handleClick={handleClickIncrease} description={"+"} />
      </div>

      <input
        type="range"
        className="w-full h-6 accent-sinbad cursor-pointer"
        value={quantity}
        onChange={handleChange}
        max={MAX_QUANTITY}
        min={MIN_QUANTITY}
        step={RANGE_STEP}
      />

      <h2 className="text-2xl font-extrabold text-sinbad text-center">
        Elige un <span className="text-eden">Plazo</span> a pagar
      </h2>

      <select
        className="py-3 px-4 pe-9 block w-full outline-none bg-white text-gray-500 text-lg font-bold text-center border border-gray-200 rounded-lg focus:border-bondi focus:ring focus:ring-bondi focus:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none"
        value={months}
        onChange={(e) => setMonths(parseInt(e.target.value))}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="18">18 meses</option>
      </select>

      <div className="bg-gray-50 p-5 space-y-3 my-5">
        <h2 className="text-2xl font-extrabold text-sinbad text-center">
          Resumen <span className="text-eden">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">
          {months} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(total)} Total a pagar
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {formatMoney(payment)} Mensuales
        </p>
      </div>
    </div>
  );
}

export default App;
