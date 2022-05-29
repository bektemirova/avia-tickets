import { useState } from "react";
import { useSelector } from "react-redux";
import TicketItem from "./Ticket_Item";

const TicketList = () => {
	const flights = useSelector((state) => state.tickets.flights);
	console.log(flights, "data it is ");
	const [selectedCarrier, setSelectedCarrier] = useState("lo");
	console.log(selectedCarrier, "state is");
	return (
		<div>
			{flights[selectedCarrier]
				? flights[selectedCarrier].map((item) => (
						<TicketItem key={item.flightToken} {...item.flight} />
				  ))
				: null}
		</div>
	);
};

export default TicketList;
