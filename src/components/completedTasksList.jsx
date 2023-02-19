import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const CompletedTasksList = () =>
{
	const [tasksData, changedTasksData] = useState(null);
	const un = useNavigate();
	const onEditTaskClick = (id) => un("/task/edit/" + id);
	const onDisplayAllTasks = () => un("/");
	const onCreateTaskClick = () => un("/task/create");

	useEffect(() =>
	{
		fetch("http://localhost:8080/api/tasks/completed")
		.then((response) => response.json())
		.then((response) => changedTasksData(response))
		.catch((error) => console.log(error.message));
	}, []);
	
	return (
		<div>
			<h2>Lista ukończonych zadań</h2>
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
							<td className = {task.completed ? "completedTaskTableCell" : "notCompletedTaskTableCell"}>{task.completed ? "UKOŃCZONE" : "Nieukończone"}</td>
							<td>
								<a onClick = {() => onEditTaskClick(task.id)}>
									EDYTUJ
								</a>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<button onClick = {() => onDisplayAllTasks()}>
				Wyświetl wszystkie zadania
			</button>
			<button onClick = {() => onCreateTaskClick()}>
				Dodaj nowe zadanie
			</button>
		</div>
	);
};

export default CompletedTasksList;