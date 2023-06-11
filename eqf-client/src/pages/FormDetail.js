import React from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function FormDetail() {
    const { id } = useParams();
    const [form, setForm] = React.useState(null);
  
    React.useEffect(() => {
      // ilgili formun ID'sini kullanarak veritabanından form verilerini getirin
      fetch(`http://localhost:5000/messages/${id}`)
        .then((res) => res.json())
        .then((data) => setForm(data))
        .catch((err) => console.error(err));
    }, [id]);
  
    if (!form) {
      return <div>Loading...</div>;
    }
  
    const { city, name, surname, createdAt, message } = form;

  return (
    <div className='col-lg-9 col-md-6 text-center m-auto bg-light'>
      <Table striped bordered hover className='text-warning text-bold mt-5'>
        <tbody>
          <tr>
            <td>No:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Which City:</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Surname:</td>
            <td>{surname}</td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>{new Date(createdAt).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td>Message:</td>
            <td>{message}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default FormDetail;
