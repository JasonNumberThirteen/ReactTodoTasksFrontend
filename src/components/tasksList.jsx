import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const TasksList = () =>
{
	return (
		<div>
			<h2>Lista zadań</h2>
			<table className = "tasksList">
				<thead className = "tasksListHead">
					<tr>
						<td>ID</td>
						<td>Nazwa</td>
						<td>Opis</td>
						<td>Ukończone?</td>
						<td>Edycja</td>
					</tr>
				</thead>
				<tbody>

				</tbody>
			</table>
			<button>
				Wyświetl tylko ukończone zadania
			</button>
			<button>
				Dodaj nowe zadanie
			</button>
		</div>
	);
};

export default TasksList;