export const handleNameAndPhone = (value,name,setNombres,setPhone) => {
  if(name === 'name'){
    if (/^[A-Za-z\s]+$/.test(value) || value === '') {
      setNombres(value);
    }
  } else if(name === 'phone'){
    if (/^[0-9\s]*\+?[0-9\s]*$/.test(value) || value === '') {
      console.log(value);
      setPhone(value);
    }
  }
};