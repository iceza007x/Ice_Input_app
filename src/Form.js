import React,{ Component } from 'react'
import './App.css';

class Form extends Component{
constructor(props){
	super(props)
	this.state = { ชื่อ:'',นามสกุล:'', อายุ:null, ที่อยู่:'',เบอร์โทรศัพท์:'',emil:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { ชื่อ, นามสกุล, อายุ, ที่อยู่, เบอร์โทรศัพท์ , emil } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	เมล : ${emil}
	ชื่อ : ${ชื่อ}
	นามสกุล : ${นามสกุล}
	อายุ: ${อายุ}
	ที่อยู่: ${ที่อยู่}
	เบอร์โทรศัพท์: ${เบอร์โทรศัพท์}
	`)
	
}

handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<h1>ยินดีต้อนรับ!</h1>
		<p>โปรดกรอกข้อมูลของคุณ</p>
		</div>
		<div>
		<label htmlFor='ชื่อ'>Email</label>
		<input
			type="email"
			name='emil'
			placeholder='Emil'
			value = {this.state.emil}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='ชื่อ'>ชื่อ</label>
		<input
			type="text"
			name='ชื่อ'
			placeholder='ชื่อ'
			value = {this.state.ชื่อ}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='นามสกุล'>Password</label>
		<input
		type="password"
			name='นามสกุล'
			placeholder='นามสกุล'
			value={this.state.นามสกุล}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='อายุ'>อายุ</label>
		<input
		type="number"
			name='อายุ'
			placeholder='อายุ'
			value={this.state.อายุ}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='ที่อยู่'>ที่อยู่</label>
		<input
		type="text"
			name='ที่อยู่'
			placeholder='ที่อยู่'
			value={this.state.ที่อยู่}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='เบอร์โทรศัพท์'>เบอร์โทรศัพท์</label>
		<input
		type="tel"
			name='เบอร์โทรศัพท์'
			placeholder='เบอร์โทรศัพท์'
			value={this.state.เบอร์โทรศัพท์}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>อยากรู้อะไรอีกมั้ย</button>
		</div>
	</form>
	)
}
}

export default Form
