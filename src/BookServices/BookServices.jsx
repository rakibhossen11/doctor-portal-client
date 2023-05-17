import { useLoaderData } from "react-router-dom";

const BookServices = () => {
  const bookings = useLoaderData();
  // console.log(bookings);
  const { image, serviceName, doctorName, price } = bookings;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                  <div className="w-24 h-24">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
              </div>
            </td>
            <td>
              <div>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">{doctorName}</div>
              </div>
            </td>
            <td>{price}</td>
            <th>
              <button className="btn btn-ghost btn-xs">Confirm</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookServices;
