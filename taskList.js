tasksArray = {};
delTasksArray = {};
counter = 0;
function addTask(id, txt)
{
	let idRow = id + counter;
	tasksArray[id + "." + counter + ".text"] = txt;
	tasksArray[id + "." + counter + ".elemHTML"] = '<p class="task" id="' + idRow + '">' + txt +'<span class="taskBtDel" onclick="deleteRow(`' + idRow + '`,`' + counter + '`)">Del</span></p>';
	document.getElementById(id).innerHTML += tasksArray[id + "." + counter + ".elemHTML"];
	counter++;
}
function deleteRow(id, counter)
{
	delTasksArray = tasksArray[id + "." + counter + ".text"];
	delete tasksArray[id + "." + counter + ".text"];
	delete tasksArray[id + "." + counter + ".elemHTML"];
	document.getElementById(id).remove();
}