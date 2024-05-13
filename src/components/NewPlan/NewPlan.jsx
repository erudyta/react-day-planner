import { useRef } from 'react'
import PlanList from '../PlanList/PlanList.jsx'

import './newplan.css'
export default function newPlan({ mode, onAddTempPlans, arrTempPlans, onDeletePlan }) {
	const startTime = useRef()
	const endTime = useRef()
	const description = useRef()

	function handleAddTempPlans() {
		if (startTime.current.value && endTime.current.value && description.current.value.trim()) {
			onAddTempPlans(startTime.current.value, endTime.current.value, description.current.value)
			startTime.current.value = ''
			endTime.current.value = ''
			description.current.value = ''
		}
	}

	let theme = 'newplan-container'
	if (mode === 2) {
		theme = 'newplan-container2'
	}

	return (
		<>
			<div className={theme}>
			{mode === 1 && <h3>Add plan</h3>}
				<div className='newplan'>
					<label htmlFor="'desc-plan">Description</label>
					<input type='text' id='desc-plan' ref={description} />
					<label className='label-flex start-time' htmlFor='start-time'>
						{' '}
						Start time
					</label>
					<input type='time' id='start-time' ref={startTime} />
					<label className='label-flex end-time' htmlFor='end-time'>
						End time
					</label>
					<input type='time' id='end-time' ref={endTime} />
					<button onClick={handleAddTempPlans}>Add</button>
				</div>
				{mode === 1 && <PlanList mode={mode} arrPlans={arrTempPlans} onDeletePlan={onDeletePlan} />}
			</div>
		</>
	)
}
