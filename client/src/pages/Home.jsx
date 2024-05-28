import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import heroImage from "C:/Users/SUMALATHA/Documents/mern estate/client/src/assets/hero.jpg";

SwiperCore.use([Navigation]);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        if (Array.isArray(data)) {
          setOfferListings(data);
        }
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        if (Array.isArray(data)) {
          setRentListings(data);
        }
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        if (Array.isArray(data)) {
          setSaleListings(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-screen text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col gap-6 py-20 px-6 max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-white-800 font-extrabold text-4xl lg:text-7xl">
            Discover Your <span className="text-blue-600">Dream Home</span>
          </h1>
          <p className="text-white-500 text-lg lg:text-2xl">
            Explore the best places to live, rent, or buy with Jeevan Estate.
          </p>
          <Link
            to="/search"
            className="inline-block mt-6 text-lg lg:text-xl text-white bg-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Let's get started
          </Link>
        </div>
      </div>
      {/* Swiper Section */}
      <div className="max-w-7xl mx-auto my-8 px-4">
        {Array.isArray(offerListings) && offerListings.length > 0 && (
          <Swiper navigation className="rounded-lg shadow-lg">
            {offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    backgroundImage: `url(${listing.imageUrls[0]})`,
                  }}
                  className="h-[500px] bg-center bg-cover rounded-lg"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Listings Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {Array.isArray(offerListings) && offerListings.length > 0 && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Recent Offers
              </h2>
              <Link
                to="/search?offer=true"
                className="text-blue-600 hover:underline"
              >
                Show more offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {Array.isArray(rentListings) && rentListings.length > 0 && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Places for Rent
              </h2>
              <Link
                to="/search?type=rent"
                className="text-blue-600 hover:underline"
              >
                Show more places for rent
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {Array.isArray(saleListings) && saleListings.length > 0 && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Places for Sale
              </h2>
              <Link
                to="/search?type=sale"
                className="text-blue-600 hover:underline"
              >
                Show more places for sale
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
