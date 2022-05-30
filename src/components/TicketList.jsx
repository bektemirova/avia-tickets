import { useState } from "react";
import { useSelector } from "react-redux";
import TicketItem from "./Ticket_Item";
import LeftSide from "./leftSideBar/LeftSide";

const TicketList = () => {
	const flights = useSelector((state) => state.tickets.flights);

	const [selectedCarrier, setSelectedCarrier] = useState("lo");

	return (
		<div className="App">
			<LeftSide />
			{flights[selectedCarrier]
				? flights[selectedCarrier].map((item) => (
						<TicketItem key={item.flightToken} {...item.flight} />
				  ))
				: null}
		</div>
	);
};

export default TicketList;
