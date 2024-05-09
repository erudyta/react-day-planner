import PlanList from '../PlanList/PlanList.jsx'

import './selectedday.css'
export default function SelectedDay({ mode, day, arrPlans, onDeletePlan, onDeleteDay, onBack }) {
	return (
		<div className='selectedday-container'>
			<header className='selectedday-header'>
				<h1>{day.date}</h1>
				<div className='seletdday-buttons'>
					<button onClick={onDeleteDay}>Delete</button>
					<button onClick={onBack}>Back</button>
				</div>
			</header>
			<div>
				<PlanList mode={mode} arrPlans={arrPlans} onDeletePlan={onDeletePlan} />
			</div>
		</div>
	)
}
