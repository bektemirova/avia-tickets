import React from "react";

const Filtering = () => {
	return (
		<div>
			<h5>Фильтровать</h5>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label>-1 пересадка в пути</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					value=""
					id="flexCheckDefault"
				/>
				<label>-Без пересадок в пути</label>
			</div>
		</div>
	);
};

export default Filtering;
