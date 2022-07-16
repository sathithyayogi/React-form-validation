import React from 'react'
import { Form } from 'react-bootstrap';

interface props {
    Label: string;
    placeholder?: string;
    type: string;
    value: string | number;
    onChange: (e: any) => void;
    error: string;
    textbox?:boolean;
    
}

const InputComponent: React.FC<props> = ({ Label, placeholder, type, onChange, value,error,textbox }: props) => {
    return (
        <Form.Group className="mb-3" controlId={Label}>
            <Form.Label>{Label}</Form.Label>
            {
textbox ? (

    <Form.Control type={type}
    value={value}
    as="textarea"
    onChange={(e) => {
        onChange(e.target.value);
    }} placeholder={placeholder ? placeholder : Label} />

) : (
    <Form.Control type={type}
    value={value}
    onChange={(e) => {
        onChange(e.target.value);
    }} placeholder={placeholder ? placeholder : Label} />
)}

            <p className='error-message'>{error}</p>
        </Form.Group>

    )
}

export default InputComponent;