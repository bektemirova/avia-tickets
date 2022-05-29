import React from "react";

const Prices = () => {
	return (
		<>
			<div className="input-group-sm mb-3 col-5">
				<label>От</label>
				<input
					type="number"
					className="form-control"
					placeholder="0"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
			<div className="input-group-sm mb-3 col-5">
				<label>До</label>
				<input
					type="number"
					className="form-control"
					placeholder="100000"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
		</>
	);
};

export default Prices;
