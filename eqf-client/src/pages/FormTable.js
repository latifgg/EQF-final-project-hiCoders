import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FormTable() {
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    // veritabanından form verilerini getirin
    fetch("http://localhost:5000/messages")
      .then(res => res.json())
      .then(data => setFormList(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='col-lg-9 col-md-6 text-center m-auto bg-light'>
      <Table striped bordered hover className='text-warning text-bold mt-5'>
        <thead>
          <tr>
            <th>No</th>
            <th>Which City</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {formList.map(form => (
            <tr key={form.id}>
              <td>{form.id}</td>
              <td>{form.city}</td>
              <td>{form.name}</td>
              <td>{form.surname}</td>
              <td>{new Date(form.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/forms/detail/${form.id}`}>
                  <Button variant="primary">Detail</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FormTable;
