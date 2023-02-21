import React, { useEffect } from 'react';
import axios from "axios";

const Payment = () => {

    const callPayment = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/payment',
                {
                    withCredentials: true
                }

            );
            //const response = await axios.get('http://localhost:5000/api/v1/payment', { headers: { "Authorization": `Bearer ${token}` } });
            // const response = await axios.get('http://localhost:5000/api/v1/payment', { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTk2ZGNhYzI5M2NjZDA5YmM3Y2MxNCIsImVtYWlsIjoicGF0LmxpdUBnbWFpbC5jb20iLCJpYXQiOjE2NzYyNjk1NzF9.AuEHEsY1irf2GjJvodpIXwS3akmhEwfV6macfEn-hlQ` } });

            console.log(response);
        } catch (error) {
            console.log("Error----->", error);
        }
    }
    useEffect(() => {

        callPayment();

    }, []);
    return (
        <div>
            Payment
        </div>
    )
}

export default Payment
