import { useEffect, useState } from "react";
import { getAllFlan } from "../api/flancito.api";
import { FlanCard } from "./FlanCard";

export function Flancitos() {
  const [flans, setFlans] = useState([]);

  useEffect(() => {
    async function loadFlans() {
      const res = await getAllFlan();
      setFlans(res.data);
    }
    loadFlans();
  }, []);

  return (
    <div>
      {flans.map((flan) => (
        <FlanCard key={flan.id} flan={flan} />
      ))}
    </div>
  );
}
