export const formatDate = date => {
  const dt = new Date(date);
  return dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();
};
export const ajaxCall = url => {
  return fetch(url)
  .then(data => data.json())
}