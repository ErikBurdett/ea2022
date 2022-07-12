import React from "react";

function API(props) {
  
  const [result, setResult] = React.useState(props.dataObject);

  React.useEffect(() => {
    setResult(result);
  }, [result]);

  return <p>{result}</p>;
}

export default API;


const smugmugAPI="https://api.smugmug.com/api/v2/user/erikburdett";



const [photoData, setPhotoData] = useState({});
useEffect(()=> {
  getPhotoData();
},[]);

const getPhotoData = async () => {
  const response = await fetch(smugmugAPI);
  const jsonData = await response.json();
  setPhotoData(jsonData);
};
console.log(photoData)