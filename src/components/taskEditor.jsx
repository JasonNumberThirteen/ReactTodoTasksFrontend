import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const TaskEditor = () =>
{
	const {taskid} = useParams();
	const [id, changedId] = useState("");
	const [name, changedName] = useState("");
	const [description, changedDescription] = useState("");
	const [completed, changedCompleted] = useState("");
	const un = useNavigate();
	const onNameChange = (e) => changedName(e.target.value);
	const onDescriptionChange = (e) => changedDescription(e.target.value);
	const onCompletedChange = (e) => changedCompleted(e.target.checked);
	const onSaveClick = (e) =>
	{
		e.preventDefault();

		const data = {id, name, description, completed};

		fetch("http://localhost:8080/api/tasks/" + taskid,
		{
			method: "PUT",
			headers: {"content-type": "application/json"},
			body: JSON.stringify(data)
		}).then(() => un("/"))
		.catch((error) => console.log(error.message));
	};
	const onRemoveClick = () =>
	{
		if(window.confirm("Czy na pewno chcesz usunąć to zadanie?"))
		{
			fetch("http://localhost:8080/api/tasks/" + taskid,
			{
				method: "DELETE"
			}).then(() => un("/"))
			.catch((error) => console.log(error.message));
		}
	};
	const onBackClick = () => un("/");

	useEffect(() =>
	{
		fetch("http://localhost:8080/api/tasks/" + taskid)
		.then((response) => response.json())
		.then((response) =>
		{
			changedId(response.id);
			changedName(response.name);
			changedDescription(response.description);
			changedCompleted(response.completed);
		})
		.catch((error) => console.log(error.message));
	}, []);
	
	return (
		<div>
			<h2>Edytuj zadanie</h2>
			<form onSubmit = {(e) => onSaveClick(e)}>
				<div>
					<label>Nazwa</label>
					<input required value = {name} onChange = {(e) => onNameChange(e)}></input>
				</div>

				{name.length === 0 && <span className = "requiredFieldText">To pole jest wymagane!</span>}

				<div>
					<label>Opis</label>
					<input required value = {description} onChange = {(e) => onDescriptionChange(e)}></input>
				</div>

				{description.length === 0 && <span className = "requiredFieldText">To pole jest wymagane!</span>}

				<div>
					<label>Ukończone?</label>
					<input type = "checkbox" checked = {completed} onChange = {(e) => onCompletedChange(e)}></input>
				</div>

				<div>
					<button type = "submit">
						Zapisz
					</button>

					<button onClick = {() => onBackClick()}>
						Powrót
					</button>
				</div>
			</form>

			<button onClick = {() => onRemoveClick()}>
				Usuń zadanie
			</button>
		</div>
	);
};

export default TaskEditor;