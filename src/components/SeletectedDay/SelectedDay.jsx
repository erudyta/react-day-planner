import './selectedDay.css'
export default function SelectedDay({ day, arrPlans }) {
	return (
		<div>
			<header>
				<h1>{day.date}</h1>
				<button>Delete</button>
			</header>
			<div>
				{arrPlans.length === 0 && <p>No plans added!</p>}
				{arrPlans.length > 0 && (
					<div className='temp-plans-container'>
						<h3>Plan list</h3>
						{arrPlans.map((plan, index) => (
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
		</div>
	)
}
