import { useState } from 'react'

import SidePlanner from './components/SidePlanner.jsx'
import StartPage from './components/StartPage/StartPage.jsx'
import SelectedDay from './components/SeletectedDay/SelectedDay.jsx'
import NewDate from './components/NewDate/NewDate.jsx'

let content
function App() {
	const [daysState, setDaysSate] = useState({
		mode: 0,
		selectedDayId: null,
		days: [],
		plans: [],
	})

	const [tempPlans, setTempPlans] = useState([])

	function handleAddTempPlans(startHour, endHour, text) {
		const planId = Math.random()
		const newPlan = {
			id: planId,
			dayId: null,
			description: text,
			startTime: startHour,
			endTime: endHour,
		}

		setTempPlans(prev => {
			return [newPlan, ...prev]
		})
	}

	function handleAddDay(date) {
		const dayId = Math.random()
		const newDay = {
			id: dayId,
			date: date,
		}

		if (tempPlans.length > 0) {
			tempPlans.map(plan => (plan.dayId = dayId))
			setDaysSate(prev => {
				return {
					...prev,
					mode: 0,
					plans: [...tempPlans, ...prev.plans],
				}
			})
		}

		setTempPlans([])

		setDaysSate(prev => {
			return {
				...prev,
				mode: 0,
				days: [newDay, ...prev.days],
			}
		})
	}

	function handleDeleteTempPlan(id) {
		setTempPlans(prev => {
			return prev.filter(plan => plan.id !== id)
		})
	}

	function handleDeletePlan() {
		setDaysSate(prev => ({
			...prev,
			plans: prev.plans.filter(plan => plan.id !== id),
		}))
	}

	function handleCreateDay() {
		setDaysSate(prev => {
			return {
				mode: 1,
				days: [...prev.days],
				plans: [...prev.plans],
			}
		})
	}

	function handleCancelDay() {
		setDaysSate(prev => {
			return {
				mode: 0,
				days: [...prev.days],
				plans: [...prev.plans],
			}
		})
		setTempPlans([])
	}

	function handleSelectDay(id) {
		setDaysSate(prev => ({
			...prev,
			selectedDayId: id,
			mode: 2,
		}))
		console.log(daysState.plans)
	}

	const handleDeleteDay = () => {
		setDaysSate(prev => ({
			...prev,
			days: prev.days.filter(day => day.id !== prev.selectedDayId),
			plans: prev.plans.filter(plan => plan.dayId !== prev.selectedDayId),
			selectedDayId: null,
			mode: 0,
		}))
	}

	const handleBack = () => {
		setDaysSate(prev => ({
			...prev,
			mode: 0,
		}))
	}

	const handleAddPlan = (startHour, endHour, text) => {
		const planId = Math.random()
		const newPlan = {
			id: planId,
			dayId: daysState.selectedDayId,
			description: text,
			startTime: startHour,
			endTime: endHour,
		}
		setDaysSate(prev => ({
			...prev,
			plans: [newPlan, ...prev.plans],
		}))
		console.log('klik')
	}

	const selectedDay = daysState.days.find(day => day.id === daysState.selectedDayId)

	if (daysState.mode === 0) {
		content = <StartPage onAddDay={handleCreateDay} />
	} else if (daysState.mode === 1) {
		content = (
			<NewDate
				mode={daysState.mode}
				onAdd={handleAddDay}
				onAddTempPlans={handleAddTempPlans}
				arrDays={daysState.days}
				arrTempPlans={tempPlans}
				onDeletePlan={handleDeleteTempPlan}
				onCancelDay={handleCancelDay}
			/>
		)
	} else if (daysState.mode === 2) {
		content = (
			<SelectedDay
				mode={daysState.mode}
				day={selectedDay}
				arrPlans={daysState.plans.filter(plan => plan.dayId === daysState.selectedDayId)}
				onDeletePlan={handleDeletePlan}
				onDeleteDay={handleDeleteDay}
				onAddPlan={handleAddPlan}
				onBack={handleBack}
			/>
		)
	}

	return (
		<main>
			<SidePlanner days={daysState.days} onSelectDay={handleSelectDay} onAddDay={handleCreateDay} selectedDayId={daysState.selectedDayId} />
			<section className='content'>{content}</section>
		</main>
	)
}

export default App
