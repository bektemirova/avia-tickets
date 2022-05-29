import { Button, ListGroupItem, ListGroup } from "reactstrap";
import { BsArrowRight } from "react-icons/bs";

const TicketItem = () => {
	//console.log(legs, "this legs");
	//let legs1 = Object.values(legs);
	//console.log(legs1, "this keys");
	return (
		<ListGroup>
			<ListGroupItem active>LOT POLISH Airlines 21779р</ListGroupItem>
	
			<ListGroupItem>
				МОСКВА, ШЕРЕМЕТЬВО(SVO) <BsArrowRight /> ЛОНДОН, Лондон, Хитроу (LHR)
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
