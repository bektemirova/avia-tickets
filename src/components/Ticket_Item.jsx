import { Button, ListGroupItem, ListGroup } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";

import logo2 from "../logo/logo-aer.png";

const TicketItem = ({ legs, price }) => {
	console.log(legs, "this is legs");
	console.log(price);
	const { segments } = legs[0];
	const { total } = price;

	let some = Object.values(legs);

	return (
		<ListGroup>
			<ListGroupItem
				style={{
					background: "rgb(37, 133, 202)",
					border: "none",
					color: "white",
				}}
			>
				<div className="logo-container">
					<img src={logo2} className="logo" alt="..." />
				</div>
				<span className="right">Стоимость для одного взрослого пассажира</span>
			</ListGroupItem>

			<ListGroupItem>
				{some.map((el) => el.segments[1].departureAirport.caption)}
				<BsArrowRight />
				{some.map((el) => el.segments[0].arrivalCity.caption)}
			</ListGroupItem>
			<ListGroupItem>
				{segments.map((el) => el.departureDate)}
				20:40, <span style={{ color: "blue" }}>18 августа вторник</span> 14
				часов 45 минут (время полета) 1 пересадка 09:25
			</ListGroupItem>
			<ListGroupItem>Рейс выполняет LOT POLISH Airlines</ListGroupItem>
			<ListGroupItem>Vestibulum at eros</ListGroupItem>
			<Button style={{ background: " #f78930", border: "none" }}>
				Выбрать
			</Button>
		</ListGroup>
	);
};

export default TicketItem;
