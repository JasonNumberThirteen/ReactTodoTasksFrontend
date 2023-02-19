import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const TaskCreator = () =>
{
	return (
		<div>
			<h2>Dodaj nowe zadanie</h2>
			<form>
				<div>
					<label>Nazwa</label>
					<input></input>
				</div>

				<div>
					<label>Opis</label>
					<input></input>
				</div>

				<div>
					<button type = "submit">
						Dodaj
					</button>

					<button>
						Powrót
					</button>
				</div>
			</form>
		</div>
	);
};

export default TaskCreator;