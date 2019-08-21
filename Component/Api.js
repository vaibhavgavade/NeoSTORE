import { AsyncStorage}  from 'react-native';
export default async function Api(url, md, bd) {
    console.log("Sigleton class is called")
  const token = await AsyncStorage.getItem("@NeoStore_at");
  console.log("Acess token is:"+token)
  const fetchUrlData = url.trim();
  var bodyData_value = null;
  if (bd != null) {
    bodyData_value = bd.trim();
  }
  const fetchingData = {
    method: md,
    headers: {
      access_token: token,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: bodyData_value
  };
  //console.log(fetchURL, fetchConfig);
  const res = await fetch(
    `http://staging.php-dev.in:8844/trainingapp/api/${fetchUrlData}`,
    fetchingData 
  );
  return await res.json();
}