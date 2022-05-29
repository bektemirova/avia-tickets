import React from "react";

const Sorting = () => {
	return (
		<div>
			<h5>Сортировать</h5>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
				/>
				<label>-По возрастанию цены</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault2"
				/>
				<label>-По убыванию цены</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault2"
				/>
				<label>-По времени в пути</label>
			</div>
		</div>
	);
};

export default Sorting;
