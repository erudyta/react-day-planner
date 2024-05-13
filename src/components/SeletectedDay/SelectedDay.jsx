import { useState } from 'react'

import PlanList from '../PlanList/PlanList.jsx'
import NewPlan from '../NewPlan/NewPlan.jsx'

import './selectedday.css'
export default function SelectedDay({ mode, day, arrPlans, onDeletePlan, onDeleteDay, onBack }) {
	const [isOpen, setIsOpen] = useState({
		plan: false,
		list: false
	})

	const handleClickAddNewPlan = () => {
		setIsOpen(prev => ({
			...prev,
			plan: !prev.plan
		}))
	}

	const handleClickList = () => {
		setIsOpen(prev => ({
			...prev,
			list: !prev.list
		}))
	}

	return (
		<section className='selectedday-container'>
			<header className='selectedday-header'>
				<h1>{day.date}</h1>
				<div className='seletdday-buttons'>
					<button onClick={onDeleteDay}>Delete</button>
					<button onClick={onBack}>Back</button>
				</div>
			</header>
			<div>
				<div className={`selectedday-newplan-container ${isOpen.plan && `selectedday-newplan-opened`}`}>
					<p className='selectedday-newplan-header'>
						<button onClick={handleClickAddNewPlan}>
							Add new plan {isOpen.plan ? <i className='bx bxs-chevrons-up'></i> : <i className='bx bxs-chevrons-down'></i>}
						</button>
					</p>
					{isOpen.plan && <NewPlan mode={mode} />}
				</div>
				<div className={`selectedday-planlist-container ${isOpen.list && `selectedday-planlist-opened`}`}>
					<p className='selectedday-planlist-header'>
						<button onClick={handleClickList}>
							{isOpen.list ? 'Hide' : 'Show'} plan list {isOpen.list ? <i className='bx bxs-chevrons-up'></i> : <i className='bx bxs-chevrons-down'></i>}
						</button>
					</p>
					{isOpen.list && <PlanList mode={mode} arrPlans={arrPlans} onDeletePlan={onDeletePlan} />}
				</div>
			</div>
		</section>
	)
}
