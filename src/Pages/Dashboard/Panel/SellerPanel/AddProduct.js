import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    let time = new Date();
    let hour = time.getHours();
    if (hour > 12) {
        hour = hour - 12;
    }

    let minute = time.getMinutes();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

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

        toast.success('please wait 30 sec for submit');

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
                    status: "available",
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
                        // console.log(data);
                        toast.success('Product Submited successfully');
                        navigate('/dashboard/my-product');
                    });
            });
    };
    return (
        <div>
            <section class="p-6  bg-base-100 rounded-md shadow-2xl mt-0 mb-10 md:mt-10">
                <h1 class="text-3xl my-2 uppercase text-center font-bold text-gray-800">
                    Add Product
                </h1>
                <form onSubmit={handleProduct}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-800" for="name">
                                Seller Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                defaultValue={user?.displayName}
                                readOnly
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="emailAddress">
                                Seller Email
                            </label>
                            <input
                                id="emailAddress"
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                readOnly
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="product">
                                Product Name
                            </label>
                            <input
                                id="product"
                                type="text"
                                name="product"
                                required
                                placeholder="Product Name"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="price">
                                Product Price
                            </label>
                            <input
                                id="price"
                                type="number"
                                required
                                name="price"
                                placeholder="Price"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="useTime">
                                Used Time
                            </label>
                            <input
                                id="useTime"
                                required
                                type="text"
                                name="useTime"
                                placeholder="Used time"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="purchaseYear">
                                Purchase year
                            </label>
                            <input
                                id="purchaseYear"
                                type="date"
                                name="purchaseYear"
                                required
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="purchase">
                                Original Price
                            </label>
                            <input
                                id="purchase"
                                type="number"
                                required
                                name="purchase"
                                placeholder="Original price"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="location">
                                Location
                            </label>
                            <input
                                id="location"
                                type="text"
                                name="location"
                                required
                                placeholder="Location"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="phone">
                                Seller Phone Number
                            </label>
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                required
                                placeholder="Seller Phone Number"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-gray-800" for="quality">
                                Product Quality
                            </label>
                            <select
                                name="quality"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring">
                                <option selected>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-800" for="category">
                                Category
                            </label>
                            <select
                                name="category"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring">
                                <option selected>Apple</option>
                                <option>HP</option>
                                <option>Dell</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-gray-800" for="photo">
                                Photo
                            </label>
                            <input
                                id="photo"
                                type="file"
                                name="productPhoto"
                                required
                                class="block w-full px-4 py-1.5 mt-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label class="text-gray-800" for="passwordConfirmation">
                            Description
                        </label>
                        <textarea
                            id="textarea"
                            type="textarea"
                            required
                            placeholder="write your product information"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button
                            type="submit"
                            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;
