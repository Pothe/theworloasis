import styled from "styled-components";
import { format, isToday} from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";


const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;


function BookingRow({booking:{startDate, endDate, status, cabins:{name:cabinName}, guests:{fullName:guestName,email} ,numNights, totalPrice}}) {

  //   if (!startDate || !endDate) return null;
//   const start = startDate ? new Date(startDate) : null;
//   const end = endDate ? new Date(endDate) : null;
//   console.log(end)
//   if(isNaN(start) || isNaN(end)) return null
//  console.log(start)


 
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };




  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin> 

       <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked> 

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night{numNights >0? "s":""} stay
        </span>
        <span>
          {startDate &&
         format(startDate, "MMM dd yyyy")} &mdash;{" "}
        {format(endDate, "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  );
}

export default BookingRow;
