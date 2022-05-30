import AviaCompany from "./AviaCompany";
import Filtering from "./Filtering";
import Prices from "./Prices";
import Sorting from "./Sorting";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const LeftSide = () => {
	return (
		<aside>
			<Sorting />
			<Filtering />
			<Prices />
			<AviaCompany />
			<Link to="/">
				<button
					className="btn m-5"
					style={{ background: "#f78930", color: "#fff" }}
				>
					Go back
				</button>
			</Link>
		</aside>
	);
};

export default LeftSide;
