import { Button, ListGroupItem, ListGroup } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";

import logo2 from "../logo/logo-aer.png";

const TicketItem = ({ legs, price }) => {
	console.log(legs, "this is legs");
	console.log(price, "this is price");
	const { segments } = legs[0];
	//const { total } = price;

	//let some = Object.values(legs);

	return (
		<ListGroup className="ticket-card">
			<ListGroupItem className="header">
				<div className="logo-container">
					<img src={logo2} className="logo" alt="..." />
				</div>
				<span className="right-text">
					<p id="amount">
						{price.total.amount} {price.total.currencyCode}
					</p>
					Стоимость для одного взрослого пассажира
				</span>
			</ListGroupItem>

			<ListGroupItem>
				{legs[0].segments[0].departureCity.caption},
				{legs[0].segments[0].departureAirport.caption}
				<span style={{ color: "blue" }}>
					({legs[0].segments[0].departureAirport.uid})
				</span>
				<BsArrowRight />
				{`${legs[0].segments[1].arrivalCity.caption}`},
				{legs[0].segments[1].arrivalAirport.caption}
				<span style={{ color: "blue" }}>
					({`${legs[0].segments[1].arrivalAirport.uid}`})
				</span>
			</ListGroupItem>
			<ListGroupItem>
				{`${legs[0].segments[0].departureDate.slice(11, 16)}`}
				{legs[0].segments[0].departureDate.slice(0, 10)}
				<BsArrowRight />
				<span style={{ color: "blue" }}>
					{legs[0].segments[1].arrivalDate.slice(11, 16)}
					{legs[0].segments[1].arrivalDate.slice(0, 10)}
				</span>
			</ListGroupItem>
			<ListGroupItem>
				Рейс выполняет {legs[0].segments[0].airline.caption}
			</ListGroupItem>

			<span className="block-example border-top border-warning"></span>
			<ListGroupItem>
				{legs[1].segments[0].departureCity.caption},{" "}
				{legs[1].segments[0].departureAirport.caption}{" "}
				<span style={{ color: "blue" }}>
					{" "}
					({legs[1].segments[0].departureAirport.uid} ){" "}
				</span>
				<BsArrowRight />
				{legs[1].segments[1].arrivalCity.caption},{" "}
				{legs[1].segments[1].arrivalAirport.caption}{" "}
				<span style={{ color: "blue" }}>
					{" "}
					({legs[1].segments[1].arrivalAirport.uid} ){" "}
				</span>
			</ListGroupItem>
			<ListGroupItem>
				{/* moment("2020-06-01T12:00:00").format("DD-MM-YYYY") */}
				{legs[1].segments[0].departureDate.slice(11, 16)}{" "}
				{legs[1].segments[0].departureDate.slice(0, 10)} <BsArrowRight />
				<span style={{ color: "blue" }}>
					{legs[1].segments[1].arrivalDate.slice(11, 16)}{" "}
					{legs[1].segments[1].arrivalDate.slice(0, 10)}
				</span>
			</ListGroupItem>
			<ListGroupItem>
				Рейс выполняет {legs[1].segments[0].airline.caption}
			</ListGroupItem>

			<Button style={{ background: " #f78930", border: "none" }}>
				Выбрать
			</Button>
		</ListGroup>
	);
};

export default TicketItem;
