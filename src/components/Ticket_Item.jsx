import { Button, ListGroupItem, ListGroup } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";

const TicketItem = ({ legs }) => {
	let some = Object.values(legs);
	console.log(some, "some filter");
	//some : 1 item = duration, 2 item = segments{}
	//some.map(el=> el.segments[0].airline.caption)

	return (
		<ListGroup>
			<ListGroupItem active>
				{/*LOT POLISH Airlines 21779р*/}
				{some.map((el) => el.segments[0].airline.caption[0])}
			</ListGroupItem>

			<ListGroupItem>
				{some.map((el) => el.segments[1].departureAirport.caption)}
				<BsArrowRight />
				{some.map((el) => el.segments[0].departureCity.departureDate)}
			</ListGroupItem>
			<ListGroupItem>
				20:40, <span style={{ color: "blue" }}>18 августа вторник</span> 14
				часов 45 минут (время полета) 1 пересадка 09:25
			</ListGroupItem>
			<ListGroupItem>Рейс выполняет LOT POLISH Airlines</ListGroupItem>
			<ListGroupItem>Vestibulum at eros</ListGroupItem>
			<Button color="warning">Выбрать</Button>
		</ListGroup>
	);
};

export default TicketItem;
