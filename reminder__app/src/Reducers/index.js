import { Add_reminder, Remove_reminder, Clear_reminder } from '../types'
import { bake_cookie, read_cookie } from 'sfcookies'
export const reducer = (state = [], action) => {
  let reminders = null
  state = read_cookie('ee')
  if (action.type === Add_reminder) {
    if(action.text==='' || action.date===''){
      alert('You have to put text and date')
      return state
    }
    else{
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() }
    ]
    bake_cookie('ee', reminders)
    return reminders}
  } else if (action.type === Remove_reminder) {
    reminders = state.filter(reminder => reminder.id !== action.id)
    bake_cookie('ee', reminders)
    return reminders
  } else if (action.type === Clear_reminder) {
    reminders = []
    bake_cookie('ee', reminders)
    return reminders
  } else return state
}
