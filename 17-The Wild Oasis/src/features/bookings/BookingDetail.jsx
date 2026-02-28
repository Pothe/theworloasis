import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Buttton from "../../ui/Button";
import { FaEye } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  // const booking = {};
  // const status = "checked-in";
  const moveBack = useMoveBack();
  const navigate = useNavigate()
const {data:booking,isLoading}= useBooking()
if(isLoading) return <Spinner/>
if(!booking) return <Empty resource={"booking"}/>
const{id, status}=booking
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };


  return (
    <>
      <Row type="horizontal">     
        <HeadingGroup>
          <Heading as="h1">Booking # ID{id} </Heading>      

          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>

       { status ==="unconfirmed" && <Buttton onClick={()=>navigate(`/checkedin/${id}`)}>check in</Buttton>} 
        
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
