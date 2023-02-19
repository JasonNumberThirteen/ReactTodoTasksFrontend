import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const TasksList = () =>
{
	const [tasksData, changedTasksData] = useState(null);
	const un = useNavigate();
	
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
					{tasksData && tasksData.map((task) =>
						<tr key = {task.id}>
							<td>{task.id}</td>
							<td>{task.name}</td>
							<td>{task.description}</td>
							<td>{task.completed ? "UKOŃCZONE" : "Nieukończone"}</td>
							<td>
								<a>
									EDYTUJ
								</a>
							</td>
						</tr>
					)}
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