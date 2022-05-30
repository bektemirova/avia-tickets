import React from "react";
import { Link } from "react-router-dom";

const FormList = () => {
	return (
		<form>
			<h1 className="text-center" style={{ color: "gray" }}>
				Лучший способ купить авиабилеты
			</h1>

			<div id="form" className="container-fluid">
				<h3 className="text-white">Gridnine Avia</h3>

				<div id="input">
					<input type="text" id="input-group" placeholder="Откуда" />
					<input type="text" id="input-group" placeholder="Куда" />
					<input type="text" id="input-group" placeholder="Когда" />
					<input type="text" id="input-group" placeholder="Обратно" />
					<select id="input-group">
						<option value="">Авиакомпания</option>
						<option value="">Аэрофлот</option>
						<option value="">Урал Авиалинии</option>
						<option value="">Polish Avia</option>
					</select>
					<select id="input-group">
						<option value="">Класс</option>
						<option value="">Эконом</option>
						<option value="">Бизнес</option>
						<option value="">Первый</option>
					</select>
				</div>

				<div id="input2">
					<input type="number" id="input-group" placeholder="взрослые" />
					<input type="number" id="input-group" placeholder="дети(2-12лет)" />
					<input
						type="number"
						id="input-group"
						placeholder="младенцы(до 2 лет)"
					/>
				</div>
				<div id="input3">
					<span id="input-group" className="text-white">
						Выберите направление
					</span>
					<input type="radio" id="input-group" name="r" className="me-2" />
					<label className="text-white " forHTML="input-group">
						в одну сторону
					</label>
					<input type="radio" id="input-group" name="r" className="me-2" />
					<label className="text-white me-2" forHTML="input-group">
						туда и обратно
					</label>
				</div>

				<div id="input4">
					<input type="text" id="input-group" placeholder="Дата" />
					<input type="text" id="input-group" placeholder="Время" />
				</div>

				<button
					type="submit"
					className="btn btn-warning text-white mt-5"
					style={{ background: " #f78930", border: "none" }}
				>
					<Link to="/tickets" className="link">
						Найти билеты
					</Link>
				</button>
			</div>
		</form>
	);
};

export default FormList;
