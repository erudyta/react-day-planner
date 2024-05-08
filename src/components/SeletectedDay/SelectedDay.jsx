import PlanList from '../PlanList/PlanList.jsx'

import './selectedday.css'
export default function SelectedDay({ mode, day, arrPlans, onDeletePlan }) {
	return (
		<div>
			<header>
				<h1>{day.date}</h1>
				<button>Delete</button>
			</header>
			<div>
				<PlanList mode={mode} arrPlans={arrPlans} onDeletePlan={onDeletePlan} />
			</div>
		</div>
	)
}
