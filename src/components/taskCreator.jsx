import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

const TaskCreator = () => {
	const [name, changedName] = useState("");
	const [description, changedDescription] = useState("");
	const un = useNavigate();
	const onNameChange = (e) => changedName(e.target.value);
	const onDescriptionChange = (e) => changedDescription(e.target.value);
	const onSaveClick = (e) => {
		e.preventDefault();

		const completed = false;
		const data = {name, description, completed};

		fetch("http://localhost:8080/api/tasks", {
			method: "POST",
			headers: {"content-type": "application/json"},
			body: JSON.stringify(data)
		}).then(() => un("/"))
		.catch((error) => console.log(error.message));
	};
	const onBackClick = () => un("/");
	
	return (
		<div>
			<h2>Dodaj nowe zadanie</h2>
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
					<button type = "submit">
						Dodaj
					</button>

					<button onClick = {() => onBackClick()}>
						Powrót
					</button>
				</div>
			</form>
		</div>
	);
};

export default TaskCreator;