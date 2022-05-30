import { useState } from "react";
import { useSelector } from "react-redux";
import TicketItem from "./Ticket_Item";
import LeftSide from "./leftSideBar/LeftSide";
import { Button } from "reactstrap";

const TicketList = () => {
	const flights = useSelector((state) => state.tickets.flights);

	const [selectedCarrier, setSelectedCarrier] = useState("lo", "flot");

	const [showMore, setShowMore] = useState(2);
	const [text, setText] = useState("Показать еще");
	const visible = () => {
		if (text == "Показать еще") {
			setShowMore(6);
			setText("Свернуть");
		}
		if (text == "Свернуть") {
			setShowMore(2);
			setText("Показать еще");
		}
	};

	return (
		<div className="App">
			<LeftSide />
			<div className="container-card">
				{flights[selectedCarrier]
					? flights[selectedCarrier]
							.slice(0, showMore)
							.map((item) => (
								<TicketItem key={item.flightToken} {...item.flight} />
							))
					: null}
				<button className=" btn btn2 " onClick={visible}>
					{text}
				</button>
			</div>
		</div>
	);
};

export default TicketList;
