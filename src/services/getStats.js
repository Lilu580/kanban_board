export function getStats(tasks) {
  const result = {
    byStatus: {},
    byAssignee: {},
    byDueDate: {}
  };

  if (!tasks || !tasks.length) {
    return result;
  }

  const oldestDate = new Date(tasks.reduce((oldest, task) => 
    new Date(task.dueDate) < new Date(oldest) ? task.dueDate : oldest, tasks[0].dueDate));

  tasks.forEach(task => {
    const { status, assignee, dueDate } = task;
    
    const taskDueDate = new Date(dueDate);
    const weekDifference = Math.floor((taskDueDate - oldestDate) / (1000 * 60 * 60 * 24 * 7));

    let formatedStatus = status;
    if (formatedStatus === 'in progress') {
      formatedStatus = 'inProgress';
    }

    result.byStatus[formatedStatus] 
      ? result.byStatus[formatedStatus]++ 
      : result.byStatus[formatedStatus] = 1;

    result.byAssignee[assignee] 
      ? result.byAssignee[assignee]++ 
      : result.byAssignee[assignee] = 1;

    result.byDueDate[weekDifference] 
      ? result.byDueDate[weekDifference]++ 
      : result.byDueDate[weekDifference] = 1;
  });

  return result;
}