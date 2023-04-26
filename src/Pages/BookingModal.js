import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/Authprovider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking ={
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,
            price
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setTreatment(null);
            if(data.acknowledged){
                setTreatment(null);
                toast.success('Booking Confirmed');
                refetch();
            }else{
                toast.error(data.message);
            }
        })



    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select w-full input-bordered ">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="email" defaultValue={user
                        ?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />

                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;