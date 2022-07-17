import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap';
import { validateEmail, validatePhoneNumber, countWords } from '../utils'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Modal } from 'react-bootstrap';
import InputComponent from './InputComponent';
interface validateObj {
    name: string;
    email: string;
    mobile: string;
    country: string;
    city: string;
    state: string;
    message: string;

}
const UserInfoForm: React.FC = () => {
    var errorInit: validateObj = { name: "", email: "", mobile: "", country: "", city: "", state: "", message: "" };


    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobile, setMobile] = useState<number>(0);
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<validateObj>(errorInit);
    const [show, setShow] = useState<boolean>(false);
    // const [toSubmit, settoSubmit] = useState<boolean>(false);
    var toSubmit: boolean = false;

    const handleClose = () => setShow(false);

    const onHandleChange = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(0);

        toSubmit = true;
        e.preventDefault();

        setError(validateError(name, email, mobile, country, city, state, message))
        console.log(toSubmit);

        if (toSubmit) {
            initializeValue();
            setError(errorInit);
            setShow(true)
        }
    }
    useEffect(() => {
        console.log(error);

    }, [error])
    const initializeValue = () => {
        setName("");
        setEmail("");
        setMobile(0);
        setCountry("");
        setCity("");
        setState("")
        setMessage("");
    }

    const validateError = (name: string, email: string, mobile: number, country: string, city: string, state: string, message: string) => {
        var error: validateObj = errorInit;
        if (!name) {
            error.name = "Name is Mandatory";
            // settoSubmit(false);
            toSubmit = false;
        }

        if (!email) {
            error.email = "Email is Mandatory"
            // settoSubmit(false);
            toSubmit = false;
        }

        if (!mobile) {
            error.mobile = "Mobile is Mandatory";
            // settoSubmit(false);
            toSubmit = false;

        }

        if (!country) {
            error.country = "Country is Mandatory";
            // settoSubmit(false);
            toSubmit = false;

        }

        if (!city) {
            error.city = "City is Mandatory";
            // settoSubmit(false);
            toSubmit = false;

        }

        if (!state) {
            error.state = "State is Mandatory";
            // settoSubmit(false);
            toSubmit = false;

        }

        if (!message) {
            error.message = "Message is Mandatory";
            // settoSubmit(false);
            toSubmit = false;

        }

        if (!validateEmail(email)) {
            error.email = "Enter valid Email Address";
            // settoSubmit(false);
            toSubmit = false;

        }
        if (!validatePhoneNumber(mobile)) {
            error.mobile = "Enter valid Mobile Number";
            // settoSubmit(false);
            toSubmit = false;

        }
        if (mobile.toString().length !== 10) {
            error.mobile = "Mobile Number should be 10 digit";
           // settoSubmit(false);
           toSubmit = false;

        }

        if (countWords(message) < 10) {
            error.message = "Message should contains atleast 10 words";
        // settoSubmit(false);
        toSubmit = false;
        }
        console.log(error);

        return error;
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'orange', justifyContent: 'center', display: 'flex' }}>
                        <Image src='tick.png' fluid width="60%" />
                    </div>
                    <div style={{ backgroundColor: 'orange', justifyContent: 'center', display: 'flex' }}>
                        <h5>Form Submitted !</h5>
                    </div>
                </Modal.Body>

            </Modal>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2>Student Info</h2>
            </div>
            <div className='flex-container'>
                <div className='flex-item-left'>
                    <Image src='lap.png' fluid width="60%" />
                    <h1>Enter your details <br />and get Students discount</h1>
                </div>
                <div className="flex-item-right">
                    <Form onSubmit={onHandleChange} className=''>
                        <InputComponent type='text' error={error.name} value={name} placeholder='Enter your Name' Label='Name' onChange={(name) => {
                            setName(name)
                        }} />
                        <InputComponent type='text' error={error.email} value={email} placeholder='Enter Email Address' Label='Email Address' onChange={(email) => {
                            setEmail(email)
                        }} />
                        <InputComponent type='number' error={error.mobile} value={mobile} placeholder='Enter Mobile Number' Label='Mobile Number' onChange={(mobile) => {
                            setMobile(mobile)
                        }} />
                        <InputComponent type='text' error={error?.country} value={country} Label='Country' onChange={(country) => {
                            setCountry(country)
                        }} />
                        <InputComponent type='text' error={error?.city} value={city} Label='City' onChange={(city) => {
                            setCity(city)
                        }} />
                        <InputComponent type='text' error={error?.state} value={state} Label='State' onChange={(state) => {
                            setState(state)
                        }} />
                        <InputComponent textbox type='text' error={error?.message} value={message} Label='Message' onChange={(message) => {
                            setMessage(message)
                        }} />

                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default UserInfoForm