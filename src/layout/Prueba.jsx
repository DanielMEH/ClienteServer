import React,{useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import transition from "react-element-popper/animations/transition"
import "./style.css"
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import InputIcon from "react-multi-date-picker/components/input_icon"
import "react-multi-date-picker/styles/colors/yellow.css"

export const Prueba = () => {
	const [value, setValue] = useState(new Date());
	const weekDays = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]
	const gregorian_en_lowercase = {
		name: "gregorian_en_lowercase",
		months: [
		  ["Enero", "Enero"],
		  ["Febrero", "feb"],
		  ["Marzo", "mar"],
		  ["Abril", "apr"],
		  ["Mayo", "may"],
		  ["Junio", "jun"],
		  ["Julio", "jul"],
		  ["Agosto", "aug"],
		  ["Septiembre", "sep"],
		  ["Octubre", "oct"],
		  ["Noviembre", "nov"],
		  ["Diciembre", "dec"],
		],
		weekDays: [
		  ["saturday", "sat"],
		  ["sunday", "sun"],
		  ["monday", "mon"],
		  ["tuesday", "tue"],
		  ["wednesday", "wed"],
		  ["thursday", "thu"],
		  ["friday", "fri"],
		],
		digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
		meridiems: [
		  ["AM", "am"],
		  ["PM", "pm"],
		],
	  };
	
  return (
	<>
	
	<Skeleton />
	
	<div className="container mx-auto text-center">
	<DatePicker value={value}
	
	locale={gregorian_en_lowercase} 

	inputClass="custom-input"
	 onChange={setValue}
	  multiple
	  range
	  animations={[
        transition({ duration: 800, from: 35 })
      ]}
	  numberOfMonths={2}
	  weekDays={weekDays}
	  className="custom-calendar"
	 
	  style={{
		backgroundColor: "aliceblue",
		height: "24px",
		borderRadius: "8px",
		fontSize: "14px",
		padding: "3px 14px"
	  }}
	  render={<InputIcon/>}
	  
	/>
	<DatePicker
  disableDayPicker
  format="hh:mm:ss A"
  plugins={[
    <TimePicker />
  ]} 
/>
	</div>
    
	</>
  )
}
