import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading/Loading';

const AvailableApointments = ({ selectedDate }) => {
    //const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');


    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json()
            return data
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    //   useEffect(() => {
    //       fetch('http://localhost:5000/appointmentOptions')
    //           .then(res => res.json())
    //           .then(data => setAppointmentOptions(data))
    //
    //}, [])
    return (
        <section className='mt-20'>
            <p className='text-2xl text-center text-secondary font-bold'>Available Appointments: {format(selectedDate, 'PP')}. </p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                    
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}

                    ></AppointmentOptions>)
                }

            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableApointments;