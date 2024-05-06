import './sidePlanner.css'
import Button from './Button/Button.jsx'
export default function SidePlanner({ plans }) {
	return (
		<aside>
			<Button>+ Add Day</Button>
			<h2>your days</h2>
			<ul className='dateList'>
				{plans.map(plan => (
					<li key={plan.date}>
						<button>{plan.date}</button>
					</li>
				))}
			</ul>
		</aside>
	)
}
