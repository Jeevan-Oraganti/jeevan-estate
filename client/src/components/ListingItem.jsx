import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`} className="block">
        <div className="relative">
          <img
            src={
              listing.imageUrls[0] ||
              "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
            }
            alt="listing cover"
            className="h-[220px] w-full object-cover"
          />
          {listing.offer && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Offer
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {listing.name}
          </h3>
          <div className="flex items-center text-gray-700 mb-2">
            <MdLocationOn className="h-5 w-5 text-green-500" />
            <p className="truncate ml-1">{listing.address}</p>
          </div>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-blue-600 text-xl font-semibold mb-2">
            $
            {listing.offer
              ? (listing.discountPrice || 0).toLocaleString()
              : (listing.regularPrice || 0).toLocaleString()}
            {listing.type === "rent" && " / month"}
          </p>

          <div className="flex justify-between text-gray-700 text-sm">
            <div className="flex items-center">
              <span className="font-semibold">{listing.bedrooms}</span>{" "}
              {listing.bedrooms > 1 ? "beds" : "bed"}
            </div>
            <div className="flex items-center">
              <span className="font-semibold">{listing.bathrooms}</span>{" "}
              {listing.bathrooms > 1 ? "baths" : "bath"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
