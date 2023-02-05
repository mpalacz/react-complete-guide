import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('pl-PL', { month: 'long' })
    const day = props.date.toLocaleString('pl-PL', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}