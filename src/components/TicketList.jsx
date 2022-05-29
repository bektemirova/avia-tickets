import { useSelector } from "react-redux";
import TicketItem from "./Ticket_Item";

const TicketList = () => {
	const flights = useSelector((state) => state.tickets.flights);
	console.log(flights);
	return (
		<div>
			{flights.map((item) => (
				<TicketItem key={item.flightToken} {...item} />
			))}
		</div>
	);
};

export default TicketList;
