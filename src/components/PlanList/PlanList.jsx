import './planlist.css'
export default function PlanList({ mode, arrPlans, onDeletePlan }) {
	let theme = 'planlist-container'
	if(mode ===2){
	 theme = 'planlist-container2'
	}

	return (
		<>
			{arrPlans.length === 0 && <p>No plans added!</p>}
			{arrPlans.length > 0 && (
				<div className={theme}>
					<h3>Plan list</h3>
					{arrPlans.map((plan, index) => (
						<div key={index} className=''>
							<div className='planlist-title'>
								<p>
									<span>{plan.startTime}</span>
									<span> - </span>
									<span>{plan.endTime}</span>
								</p>
								<i onClick={() => onDeletePlan(plan.id)} className='bx bx-minus-circle'></i>
							</div>
							<p className='planlist-desc'>{plan.description}</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}
