
const AddCoffee = () => {


    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity , supplier, taste, category, details, photo};
        
        console.log(newCoffee);

    }

    return (
        <div className=" container mx-auto  bg-[#F4F3F0] p-10 text-black text-center">
            <h1 className="text-3xl font-bold">add coffee</h1>

            <form onSubmit={handleAddCoffee}>
                {/* form row 1 */}
                <div className="flex gap-5">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input name="name" type="text" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input name="quantity" type="text" placeholder="Available Quantity" className="input input-bordered w-full" />
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
                            <input name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input name="taste" type="text" placeholder="Taste" className="input input-bordered w-full" />
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
                            <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-controll">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input name="details" type="text" placeholder="Details" className="input input-bordered w-full" />
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
                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block mt-5" type="submit" value="Add Coffee" />

            </form>

        </div>
    );
};

export default AddCoffee;