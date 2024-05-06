import { useState } from 'react'

import SidePlanner from './components/SidePlanner.jsx'
import StartPage from './components/StartPage/StartPage.jsx'
import SelectedDay from './components/SeletectedDay/SelectedDay.jsx'
import NewDate from './components/NewDate/NewDate.jsx'

let content
function App() {
	const [daysState, setDaysSate] = useState({
		selectedDay: 0,
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
					plans: [...tempPlans, ...prev.plans],
				}
			})
			setTempPlans([])
		}

		setDaysSate(prev => {
			return {
				...prev,
				days: [newDay, ...prev.days],
			}
		})
	}

	function handleDeleteTempPlan(id) {
		setTempPlans(prev => {
			return prev.filter(plan => plan.id !== id)
		})
	}

	function handleCreateDay() {
		setDaysSate(prev => {
			return {
				selectedDay: 1,
				days: [...prev.days],
				plans: [...prev.plans],
			}
		})
	}

	function handleCancelDay() {
		setDaysSate(prev => {
			return {
				selectedDay: 0,
				days: [...prev.days],
				plans: [...prev.plans],
			}
		})
		setTempPlans([])
	}


	if (daysState.selectedDay === 0) {
		content = <StartPage onAddPlan={handleCreateDay} />
	} else if (daysState.selectedDay === 1) {
		content = (
			<NewDate
				onAdd={handleAddDay}
				onAddTempPlans={handleAddTempPlans}
				arrTempPlans={tempPlans}
				onDeletePlan={handleDeleteTempPlan}
				onCancelDay={handleCancelDay}
			/>
		)
	} else {
		content = <SelectedDay />
	}
	

	return (
		<main>
			<SidePlanner plans={daysState.days} />
			{content}
		</main>
	)
}

export default App
