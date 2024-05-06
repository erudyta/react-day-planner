import { useRef } from 'react'

import NewPlan from '../NewPlan/NewPlan.jsx'

import './newDate.css'
export default function NewDate({ onAdd, onAddTempPlans, arrTempPlans, onDeletePlan, onCancelDay }) {
	const date = useRef()

	function handleClick() {
		if (date.current.value.trim() === '') {
			return
		}
		onAdd(date.current.value)
	}

	return (
		<section className='newdate-container'>
			<h2>Create a new day plan</h2>
			<label htmlFor='date'>Choose date for new day plan</label>
			<input type='date' id='date' name='date' ref={date} />
			<NewPlan onAddTempPlans={onAddTempPlans} arrTempPlans={arrTempPlans} onDeletePlan={onDeletePlan} />
			<div className='newdate-buttons'>
				<button onClick={handleClick}>Add day plan</button>
				<button onClick={onCancelDay}>Cancel</button>
			</div>
		</section>
	)
}
