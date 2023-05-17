

const AddService = () => {
  const handleServiceAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const doctorName = form.doctorName.value;
    const price = form.price.value;
    const image = form.image.value;
    const newService = {serviceName,doctorName,price,image};
    console.log(newService);

    fetch('http://localhost:5000/services',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newService)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

  };

  return (
    <div>
      <div className="bg-base-200">
        <div className="flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add your service</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleServiceAdd}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Name"
                    name="serviceName"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Doctor Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doctor Name"
                    name="doctorName"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image Url"
                    name="image"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Your Service</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
