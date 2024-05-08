import { useState, useRef } from 'react'

import NewPlan from '../NewPlan/NewPlan.jsx'

import './newdate.css'

export default function NewDate({ mode, onAdd, onAddTempPlans, arrDays, arrTempPlans, onDeletePlan, onCancelDay }) {
	const [enteredValue, setEnteredValue] = useState('')
	const date = useRef()

	function handleInputChange(event) {
		setEnteredValue(event.target.value)
	}
	const isDateExists = arrDays.some(el => el.date === enteredValue)

	function handleClick() {
		if (date.current.value.trim() === '' || isDateExists) {
			return
		}
		onAdd(date.current.value)
		date.current.value = ''
	}

	return (
		<section className='newdate-container'>
			<h2>Create a new day plan</h2>
			<label htmlFor='date'>Choose date for new day plan</label>
			<input type='date' id='date' name='date' ref={date} value={enteredValue} onChange={handleInputChange} />
			{isDateExists && <p className='newdate-err'>The plan for this day has already been created</p>}
			<NewPlan mode={mode} onAddTempPlans={onAddTempPlans} arrTempPlans={arrTempPlans} onDeletePlan={onDeletePlan} />
			<div className='newdate-buttons'>
				<button onClick={handleClick}>Add day plan</button>
				<button onClick={onCancelDay}>Cancel</button>
			</div>
		</section>
	)
}
