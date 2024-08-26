import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const questions_list = [
// {
// 	id: 1,
// 	question: "Question 1",
// 	options: ["Option 1", "Option 2", "Option 3", "Option 4"],
// 	answer: "Option 1",
// },
// 	{
// 		id: 2,
// 		question: "Question 2",
// 		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
// 		answer: "Option 1",
// 	},
// 	{
// 		id: 3,
// 		question: "Question 3",
// 		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
// 		answer: "Option 1",
// 	},
// 	{
// 		id: 4,
// 		question: "Question 4",
// 		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
// 		answer: "Option 1",
// 	},
// ];

export default function Questions() {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [showAnwer, setShow] = useState(false);

	const [questions_list, set_questions_list] = useState([{
		id: 1,
		question: "Question 1",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
		answer: "Option 1",
	},]);

	const navigate = useNavigate();

	function decodeHTML(html) {
		const txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	}

	const fetchQuestions = async () => {
		try {
			const response = await fetch('http://localhost:5000');
			const parser = new DOMParser();

			const result = await response.json();
			set_questions_list([]);
			const new_list = [];
			let id = 0;
			for (const question of result) {
				let q = parser.parseFromString(question['Question'], 'text/html').querySelector("body").innerHTML;
				q = decodeHTML(q).replaceAll(/\\/g, '')
				new_list.push({
					question: q,
					answer: question['Correct_Answer'],
					options: Object.values(JSON.parse(question['Options'].replaceAll("'", '"')))
				})
				id++;
			}
			set_questions_list(new_list);
		}
		catch (error) {
			console.error('Error:', error);
			navigate('/login');
		}
	};

	useEffect(() => {
		fetchQuestions();
	}, [])

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="text-center flex flex-col items-center max-w-[60%]">
				<div className="text-2xl font-bold text-red-400 mb-5">
					Program: Computer Science
				</div>
				<div className="text-sm font-semibold text-gray-600">
					{questionIndex + 1} / {questions_list.length}
				</div>
				<div className="5ext-3xl font-bold mb-2">
					{questions_list[questionIndex].question}
				</div>
				<div className="w-[500px]">
					{questions_list[questionIndex].options.map((option, index) => (
						<div
							key={index}
							className="p-4 text-left mb-4 bg-gray-200 py-4 flex flex-row items-center"
						>
							<input
								name="option"
								className="w-5 h-5"
								id={"option" + index}
								value={option}
								type="radio"
								onChange={() => setShow(true)}
							/>
							<label className="ml-5" htmlFor={"option" + index}>
								{option}
							</label>
						</div>
					))}
				</div>
				{showAnwer && <div className="mb-3"><span className="font-bold">Answer: </span>{questions_list[questionIndex].answer}</div>}
				<div className="flex flex-row">
					{questionIndex > 0 && (
						<button
							className="bg-red-400 text-white px-4 py-2 rounded w-32 ml-5"
							disabled={questionIndex === 0}
							onClick={() => {
								setShow(false);
								if (questionIndex === 0) {
									return;
								}
								setQuestionIndex(questionIndex - 1);
							}}
						>
							Previous
						</button>
					)}

					{questionIndex < questions_list.length - 1 && (
						<button
							className="bg-red-400 text-white px-4 py-2 rounded w-32 ml-5"
							disabled={questionIndex === questions_list.length - 1}
							onClick={() => {
								setShow(false);
								if (questionIndex === questions_list.length - 1) {
									return;
								}
								setQuestionIndex(questionIndex + 1);
							}}
						>
							Next
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
