import React, {PureComponent} from 'react'
import AsyncSelect from 'react-select/async'

class SelectOlt extends PureComponent {

    state = {
        olts:[]
    }

    onChange = olts =>{
        this.setState({
                olts:olts || []
            }
        )
    }

    loadOptions=async (inputText,callback)=>{
        const username = 'esonaglioni'
        const password = '3s0n4gl10n1'
        const resC300 = await fetch(
          'http://172.31.148.235:8080/nms/api/querys/allbymodel/C300',{  headers: {
              Authorization: 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64'),
            }})
        const jsonC300 = await resC300.json();

        const oltsFiltered = []

        jsonC300.map(i=>{
                if(String(i.ip).includes(inputText) || String(i.hostname).includes(inputText)){
                    oltsFiltered.push(i)
                }
            }
        )

        console.log(oltsFiltered)

        callback(oltsFiltered.map(i=>({label:i.hostname, value:i.ip})))

        console.log("consulta")
    }

    render() {
        return(
            <AsyncSelect
                isMulti
                value={this.state.olts}
                onChange={this.onChange}
                placeholder={"Hostname o IP de la OLT"}
                loadOptions={this.loadOptions}
                theme={theme=>({
                    ...theme,
                    borderRadius: 0,
                    colors:{
                        ...theme.colors,
                        primary25:'light-blue',
                        primary:'black',
                        neutral0:'white',
                        neutral90:'white'
                    }
                })}
            />
            
        );
    }
}

export default SelectOlt;
