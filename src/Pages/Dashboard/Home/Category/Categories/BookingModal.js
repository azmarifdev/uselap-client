import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../Context/AuthProvider';

const BookingModal = ({ setBookingData, bookingData }) => {
    const { user } = useContext(AuthContext);
    const { location, phone, productName, price, productImage, _id, name, email } = bookingData;
    // console.log(bookingData);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const price = form.price.value;
        const bookings = {
            name: user?.displayName,
            email: user?.email,
            sellerEmail: email,
            sellerName: name,
            productImage,
            phone,
            productId: _id,
            location,
            price,
            productName,
        };
        fetch(`${process.env.REACT_APP_LOCALHOST}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookings),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setBookingData(null);
                    toast.success('Booking Successfully');
                } else {
                    toast.error(data.message);
                }
            });
    };

    return (
        <>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-2xl text-center font-bold">
                        <span className="text-purple-600">Product Name:</span>{' '}
                        {productName}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 mt-10">
                        <label
                            className="mb-1 block text-sm text-gray-600"
                            htmlFor="first_name">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Your Name"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email Address"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="price"
                            type="number"
                            defaultValue={price}
                            disabled
                            placeholder="price"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="location"
                            type="text"
                            defaultValue={location}
                            placeholder="Location"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="phone"
                            type="number"
                            defaultValue={phone}
                            placeholder="Phone Number"
                            className="input w-full input-bordered"
                        />
                        <br />
                        <input
                            className="btn btn-accent w-full"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
