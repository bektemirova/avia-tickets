import AviaCompany from "./AviaCompany";
import Filtering from "./Filtering";
import Prices from "./Prices";
import Sorting from "./Sorting";

const LeftSide = () => {
	return (
		<aside>
			<Sorting />
			<Filtering />
			<Prices />
			<AviaCompany />
		</aside>
	);
};

export default LeftSide;
