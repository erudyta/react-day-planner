import './sideplanner.css'
import Button from './Button/Button.jsx'
export default function SidePlanner({ days, onSelectDay, onAddDay }) {
	return (
		<aside>
			<Button onClick={onAddDay}>+ Add Day</Button>
			<h2>your days</h2>
			<ul className='dateList'>
				{days.map(day => (
					<li key={day.date}>
						<button onClick={() => onSelectDay(day.id)}>{day.date}</button>
					</li>
				))}
			</ul>
		</aside>
	)
}
