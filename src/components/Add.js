import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import uuid from 'react-uuid';

function Add() {
  const [id,setId]=useState('');
  const [empName,setEmpName]=useState('');
  const [age,setAge]=useState('');
  const [designation,setDesignation]=useState('');
  const [salary,setSalary]=useState('');

  const history=useNavigate()


  const handleAdd=(e)=>{
    e.preventDefault(); //prevent refreshing

    let ids=uuid();
    console.log(ids);

    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);

    Employee.push({
      id:uniqueId,
      empName:empName,
      age:age,
      designation:designation,
      salary:salary
    })
    history('/')
  }

  return (
    <>
        <h1 className='text-primary text-center m-4'>Add Employee Management System</h1>
    <p className='p-3'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.</p>
     
     <Row>
      <Col md={5}>
      <img width={450} src='https://icon-library.com/images/employee-icon-png/employee-icon-png-19.jpg'/>
      </Col>
      <Col md={5}>

      <Form className='border border-3 p-5'>
      <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Id" 
          // value={id}
          onChange={(e)=>setId(e.target.value)}
          required

              />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" 
          // value={empName}
          onChange={(e)=>setEmpName(e.target.value)}
          required


              />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age"
          // value={age}
          onChange={(e)=>setAge(e.target.value)}
          required


              />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Designation" 
          // value={designation}
          onChange={(e)=>setDesignation(e.target.value)}
          required


              />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Salary" 
          // value={salary}
          onChange={(e)=>setSalary(e.target.value)}
          required

              />
      </Form.Group>


      

      <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
       Add
      </Button>
    </Form>
      </Col>
      </Row> 
     </>
  )
}

export default Add