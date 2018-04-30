export const getCategoryDataFromLocalStorage = category => {
  const processedData = localStorage.getItem(category)
    ? JSON.parse(localStorage.getItem(category))
    : {}

  return processedData
}
