import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

function Editor() {
    const [language, setLanguage] = useState("")
    const [code,setCode] = useState("")

    const [out,setOutput] = useState("no output")



    const clearData = () => {
        toast.success("Data cleared successfully")
       setLanguage("")
       setCode("")
       setOutput("no output")
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let data = {
                language,
                code 
            }
             await axios.post(`/compile`, data)
                .then(res => {
                    setOutput(res.data.output)
                    toast.success("Code executed successfully")
                }).catch(err => toast.error(err.response.data.msg))
                

        } catch (err) {
            toast.error(err)
        }
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 mt-5 text-center">
                <h3 className="display-3 text-primary">Editor</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                    <div className="card-body">
                       
                            <div className="form-group mt-2 mb-4">
                                <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="form-select">
                                    <option value="null">Choose Language</option>
                                    <option value="cpp">C & C++</option>
                                    <option value="java">Java</option>
                                    <option value="python">Python</option>
                                </select>
                            </div>

                            <div className="form-group mt-4 mb-2">
                                <textarea name="code" id="code" cols="30" rows="15" value={code} onChange={(e) => setCode(e.target.value )} className="form-control"></textarea>
                            </div>

                            <div className="form-group mt-4 mb-2">
                                <button type="button" className='btn btn-success' onClick={submitHandler}>
                                    <i className="bi bi-upload"></i> Execute
                                </button>

                                <button className="float-end btn btn-danger" onClick={clearData}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                    
                    </div>
                </div>
            </div>
                <div className="col-md-12 col-lg-6 col-sm-12 text-center mt-5">
                    <h3 className="text-success display-3"> { out } </h3>
                </div>
        </div>
    </div>
  )
}

export default Editor
