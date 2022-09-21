export const getCurrentDate = (today) => {
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  const hh = today.getHours()
  const min = today.getMinutes()
  const sec = today.getSeconds()
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${sec}`
}

export const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}
