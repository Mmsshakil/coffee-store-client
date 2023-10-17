import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    console.log(coffee);


    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(updatedCoffee);

        // send data to the database
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Done", "Coffee Updated Success", "success");
                }
            })
        // ---------------------------------

    }


    return (

        <div className=" container mx-auto  bg-[#F4F3F0] p-10 text-white text-center">
            <h1 className="text-3xl font-bold text-black">Update coffee {name}</h1>

            <form onSubmit={handleUpdateCoffee} >
                {/* form row 1 */}
                <div className="flex gap-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input name="name" type="text" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input name="quantity" type="text" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 2 */}
                <div className="flex gap-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input name="supplier" type="text" placeholder="Supplier" defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input name="taste" type="text" placeholder="Taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 3 */}
                <div className="flex gap-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input name="category" type="text" placeholder="Category" defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-controll">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input name="details" type="text" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 4 */}
                <div className="">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input name="photo" type="text" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block mt-5" type="submit" value="Update Coffee" />

            </form>

        </div>
    );
};

export default UpdateCoffee;