import './sideplanner.css'
import Button from './Button/Button.jsx'
export default function SidePlanner({ days, onSelectDay, onAddDay, selectedDayId }) {
	return (
		<aside>
			<Button onClick={onAddDay}>+ Add Day</Button>
			<h2>your days</h2>
			<ul className='datelist'>
				{days.map(day => (
					<li key={day.date} className={day.id === selectedDayId ? 'datelist-active' : ''}>
						<button onClick={() => onSelectDay(day.id)}>{day.date}</button>
					</li>
				))}
			</ul>
		</aside>
	)
}
