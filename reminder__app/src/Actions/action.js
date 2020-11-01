import { Add_reminder, Remove_reminder, Clear_reminder } from '../types'

export const add_reminder = (text, date) => {
  const action = {
    type: Add_reminder,
    text,
    date
  }
  return action
}
export const remove_reminder = id => {
  const action = {
    type: Remove_reminder,
    id
  }
  return action
}
export const clear_reminder = () => {
  const action = {
    type: Clear_reminder
  }
  return action
}
