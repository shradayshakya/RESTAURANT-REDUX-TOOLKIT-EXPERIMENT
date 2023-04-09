import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
}

export default function ReservationCard({ name }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeReservation(name));
    dispatch(
      addCustomer({
        id: uuid(),
        name: name,
        food: [],
      })
    );
  };

  return (
    <div onClick={remove} className="reservation-card-container">
      {name}
    </div>
  );
}
