tasksArray = {};
delTasksArray = {};
counter = 0;
function addTask(id, txt, idInp, impButton)
{
	if(txt == "" || txt == " ")
		return;
	let idRow = id + counter;
	tasksArray[id + "." + counter + ".text"] = txt;
	tasksArray[id + "." + counter + ".elemHTML"] = '<div class="task" id="' + idRow + '"><p class="taskTxt">' + txt +'</p><p class="taskBtDel" onclick="deleteRow(`' + idRow + '`,`' + counter + '`)">Del</p></div>';
	// if(impButton)
	// 		tasksArray[id + "." + counter + ".elemHTML"] = '<div class="taskImp" id="' + idRow + '"><p class="taskTxt">' + txt +'</p><p class="taskBtDel" onclick="deleteRow(`' + idRow + '`,`' + counter + '`)">Del</p></div>';
	document.getElementById(id).innerHTML += tasksArray[id + "." + counter + ".elemHTML"];
	document.getElementById(idInp).value = "";
	counter++;
}
function deleteRow(id, counter)
{
	delTasksArray = tasksArray[id + "." + counter + ".text"];
	delete tasksArray[id + "." + counter + ".text"];
	delete tasksArray[id + "." + counter + ".elemHTML"];
	document.getElementById(id).remove();
}
function resetInputAndAddTask(idInp)
{
	addTask("tasks", document.getElementById(idInp).value, idInp);
	document.getElementById(idInp).value = "";
}
function key(event)
{
	if(event.code === "Enter")
		resetInputAndAddTask(event.path[0].attributes[0].nodeValue);
}