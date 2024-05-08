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

	return (
		<>
			<div className='newplan-container'>
				<div className='newplan'>
					<h3>Your plan</h3>
					<label htmlFor="'desc-plan">Description</label>
					<input type='text' id='desc-plan' ref={description} />
					<label className='label-flex' htmlFor='start-time'>
						{' '}
						Start time
					</label>
					<input type='time' id='start-time' ref={startTime} />
					<label className='label-flex' htmlFor='end-time'>
						End time
					</label>
					<input type='time' id='end-time' ref={endTime} />
					<button onClick={handleAddTempPlans}>Add</button>
				</div>
				<PlanList mode={mode} arrPlans={arrTempPlans} onDeletePlan={onDeletePlan}/>
			</div>
		</>
	)
}
