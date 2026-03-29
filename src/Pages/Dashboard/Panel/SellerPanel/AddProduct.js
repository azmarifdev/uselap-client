import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const inputClass =
    'mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 focus:border-slate-500 focus:outline-none';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const time = new Date();
    let hour = time.getHours();
    if (hour > 12) {
        hour = hour - 12;
    }

    const minute = time.getMinutes();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();

    const handleProduct = (e) => {
        e.preventDefault();
        const productName = e.target.product.value;
        const price = e.target.price.value;
        const useTime = e.target.useTime.value;
        const purchaseYear = e.target.purchaseYear.value;
        const purchase = e.target.purchase.value;
        const location = e.target.location.value;
        const phone = e.target.phone.value;
        const category = e.target.category.value;
        const quality = e.target.quality.value;
        const textarea = e.target.textarea.value;

        toast.success('Please wait, submitting product...');

        const image = e.target.productPhoto.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imageData) => {
                const productImage = imageData.data.display_url;
                const productInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL,
                    phone,
                    productName,
                    price,
                    useTime,
                    productImage,
                    purchaseYear,
                    purchase,
                    location,
                    category,
                    quality,
                    status: 'available',
                    textarea,
                    date: `${date}/${month}/${year}`,
                    time: `${hour}:${minute}`,
                };

                fetch(`${process.env.REACT_APP_LOCALHOST}/products`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(productInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            toast.success('Product submitted successfully');
                            navigate('/dashboard/my-product');
                        }
                    });
            });
    };

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Seller Panel
                </p>
                <h1 className="mt-1 text-2xl font-bold text-slate-900">Add Product</h1>
                <p className="mt-1 text-sm text-slate-600">
                    Add complete product details to make your listing trusted and easier to sell.
                </p>
            </div>

            <form onSubmit={handleProduct}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                            Seller Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            defaultValue={user?.displayName}
                            readOnly
                            type="text"
                            className={`${inputClass} bg-slate-50`}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="emailAddress">
                            Seller Email
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            className={`${inputClass} bg-slate-50`}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="product">
                            Product Name
                        </label>
                        <input
                            id="product"
                            type="text"
                            name="product"
                            required
                            placeholder="Product name"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="price">
                            Product Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            required
                            name="price"
                            placeholder="Price"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="useTime">
                            Used Time
                        </label>
                        <input
                            id="useTime"
                            required
                            type="text"
                            name="useTime"
                            placeholder="e.g. 1 year"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="purchaseYear">
                            Purchase Date
                        </label>
                        <input
                            id="purchaseYear"
                            type="date"
                            name="purchaseYear"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="purchase">
                            Original Price
                        </label>
                        <input
                            id="purchase"
                            type="number"
                            required
                            name="purchase"
                            placeholder="Original price"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="location">
                            Location
                        </label>
                        <input
                            id="location"
                            type="text"
                            name="location"
                            required
                            placeholder="Location"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
                            Seller Phone Number
                        </label>
                        <input
                            id="phone"
                            type="number"
                            name="phone"
                            required
                            placeholder="Phone number"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="quality">
                            Product Quality
                        </label>
                        <select id="quality" name="quality" className={inputClass} defaultValue="Excellent">
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="category">
                            Category
                        </label>
                        <select id="category" name="category" className={inputClass} defaultValue="Apple">
                            <option value="Apple">Apple</option>
                            <option value="HP">HP</option>
                            <option value="Dell">Dell</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-slate-700" htmlFor="photo">
                            Product Photo
                        </label>
                        <input
                            id="photo"
                            type="file"
                            name="productPhoto"
                            required
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="text-sm font-semibold text-slate-700" htmlFor="textarea">
                        Description
                    </label>
                    <textarea
                        id="textarea"
                        name="textarea"
                        required
                        placeholder="Write your product details"
                        className="mt-2 block h-28 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 focus:border-slate-500 focus:outline-none"
                    />
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                        Save Product
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;
