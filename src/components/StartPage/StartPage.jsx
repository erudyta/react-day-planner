import logo from '../../assets/notebook.png'
import Button from '../Button/Button'

import './startpage.css'
export default function NewPlan({onAddDay}) {
	return (
		<div className='startpage-container'>
			<img src={logo} alt="notebook" />
			<h1>Day Planner</h1>
			<p>Create a plan for a new day or choose one of the created ones.</p>
			<Button onClick={onAddDay}>Create new day</Button>
		</div>
	)
}
