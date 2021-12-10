import { useState, useEffect } from 'react';



function OLTs() {
  const [olts, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
        const username = 'esonaglioni'
        const password = '3s0n4gl10n1'
    
        const resC300 = await fetch(
            'http://172.31.148.235:8080/nms/api/querys/allbymodel/C300',{  headers: {
                Authorization: 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64'),
            }})
        const jsonC300 = await resC300.json();
        setData(
            jsonC300.forEach(obj =>{
                Object.entries(obj).forEach(([key, value]) => {
                if (key === "ip"){
                    if(String(value).startsWith("172.30.77")){
                    olts.push({
                        "ip":value,
                        "hostname":obj["hostname"]
                    })
                    }
                }
                });
            })
        );
    
        const resC600 = await fetch(
            'http://172.31.148.235:8080/nms/api/querys/allbymodel/C600',{  headers: {
                Authorization: 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64'),
            }})
        const jsonC600 = await resC600.json();
        setData(
            jsonC600.forEach(obj =>{
                Object.entries(obj).forEach(([key, value]) => {
                if (key === "ip"){
                    if(String(value).startsWith("172.30.77")){
                    olts.push({
                        "ip":value,
                        "hostname":obj["hostname"]
                    })
                    }
                }
                });
            })
        );
        const resHuawei = await fetch(
            'http://172.31.148.235:8080/nms/api/querys/allbymodel/Huawei',{  headers: {
                Authorization: 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64'),
            }})
        const jsonHuawei = await resHuawei.json();
        setData(
            jsonHuawei.forEach(obj =>{
                Object.entries(obj).forEach(([key, value]) => {
                if (key === "ip"){
                    if(String(value).startsWith("172.30.77")){
                    olts.push({
                        "ip":value,
                        "hostname":obj["hostname"]
                    })
                    }
                }
                });
            })
        );
        console.log(olts)
        };
      fetchData()
    },[]);
    
    
    return (
        <div>
            <select>

            </select>
      </div>
  );  
}

export default OLTs;