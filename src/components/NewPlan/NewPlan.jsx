import { useRef } from 'react'

import './newPlan.css'
export default function newPlan({ onAddTempPlans, arrTempPlans, onDeletePlan }) {
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
					<label className='label-flex' htmlFor='end-time'>End time</label>
					<input type='time' id='end-time' ref={endTime} />
					<button onClick={handleAddTempPlans}>Add</button>
				</div>
				{arrTempPlans.length === 0 && <p>No plans added!</p>}
				{arrTempPlans.length > 0 && (
					<div className='temp-plans-container'>
						<h3>Plan list</h3>
						{arrTempPlans.map((plan, index) => (
							<div key={index} className=''>
								<div className='plan-title'>
									<p>
										<span>{plan.startTime}</span>
										<span> - </span>
										<span>{plan.endTime}</span>
									</p>
									<i onClick={() => onDeletePlan(plan.id)} className='bx bx-minus-circle'></i>
								</div>

								<p className='plan-desc'>{plan.description}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
