const getUser = (studentId, cb) => {
	const students = [{
		name: 'Prathap',
		email: 'prathap@btg.com',
		pass: '1234',
		mobile: '8179984864'
	},
	{
		name: 'Pranav',
		email: 'prathap@btg.com',
		pass: '1234',
		mobile: '8179984864'
	},
	{
		name: 'Pranay',
		email: 'prathap@btg.com',
		pass: '1234',
		mobile: '8179984864'
	},
	{
		name: 'Praveen',
		email: 'prathap@btg.com',
		pass: '1234',
		mobile: '8179984864'
	}];
	const studentDetails = students[studentId];
	return cb(studentDetails);
}

const getScores = (marksId, cb) => {
	const studentMarks = [{
		maths: 10,
		physics: 20,
		telugu: 35,
		social: 25
	},
	{
		maths: 10,
		physics: 20,
		telugu: 35,
		social: 25
	},
	{
		maths: 10,
		physics: 20,
		telugu: 35,
		social: 25
	},
	{
		maths: 10,
		physics: 20,
		telugu: 35,
		social: 25
	}];
	const markDetails = studentMarks[marksId];
	console.log('w345tyr')
	return cb(markDetails);
}

const calculateSumOfAllSubjects = (marks, cb) => {
	let totalMarks = 0;
	Object.keys(marks).forEach((mark) => totalMarks += marks[mark]);
	return cb(totalMarks);
}

const printPassOrFail = (totalMarks, cb) => {
	if (totalMarks > 20) {
		return cb("pass");
	} else {
		return cb("fail");
	}
}

getUser(1, (studentDetails, err) => {
	getScores(1, (scores, err) => {
		calculateSumOfAllSubjects(scores, (totalMarks, err) => {
			printPassOrFail(totalMarks, (status, err) => {
				console.log(status);
				// Callback Hell ("-_-)
			})
		})
	})
})


//updated ver of promises & callback

// async function main() {
// 	await getUser();
// 	await getScores();
// 	await calculateSumOfAllSubjects();
// 	await printPassOrFail();
// 	await decideCollege();
// }