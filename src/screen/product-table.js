import React from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css";


const defaultValues = {
    id: null,
    name: "",
    description: "",
    quantity: 0
}

function MyForm() {
  const [formValues, setFormValues] = React.useState(defaultValues);  
    let navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async () => { 
        const input = {
          ...formValues,
            id: parseInt(formValues.id),
          quantity: parseInt(formValues.quantity),
        };

       await fetch(`${API_URL}/create`, {
         method: "POST",
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify(input),
       })
         .then((response) => response.json())
         .then((data) => {
           console.log("Success:", data);
           setFormValues(defaultValues);
           alert("Product created successfully!");
         })
         .catch((error) => {
           console.error("Error:", error);
         });

    }
    

     const handleFieldChange = React.useCallback(
       (e) => {
         setFormValues({ ...formValues, [e.target.name]: e.target.value });
       },
       // eslint-disable-next-line react-hooks/exhaustive-deps
       [formValues]
     );
  
    const handleNavigate = () => navigate("/list", { replace: true });


    return (
      <div className="App">
     
        <div className="App-header">
          <span className="span">Add product form</span>
          <label className="label">Id</label>
          <input
            name="id"
            type="number"
            value={formValues.id}
            onChange={handleFieldChange}
            className="input"
          />
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleFieldChange}
            className="input"
          />
          <label className="label">Description</label>
          <input
            name="description"
            type="text"
            value={formValues.description}
            onChange={handleFieldChange}
            className="input"
          />
          <label className="label">Quantity</label>
          <input
            name="quantity"
            type="number"
            value={formValues.quantity}
            onChange={handleFieldChange}
            className="input"
          />
             <div className="div-submit">
             <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>

          <button type="submit" className="submit" onClick={handleNavigate}>
            Products list
          </button>
        </div>
       
        </div>
      </div>
    );
    
}


export default  MyForm