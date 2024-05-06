import logo from '../../../public/notebook.png'
import Button from '../Button/Button'

import './startPage.css'
export default function NewPlan({onAddPlan}) {
	return (
		<div className='startpage-container'>
			<img src={logo} alt="notebook" />
			<h1>Day Planner</h1>
			<p>Create a plan for a new day or choose one of the created ones</p>
			<Button onClick={onAddPlan}>Create new day</Button>
		</div>
	)
}
