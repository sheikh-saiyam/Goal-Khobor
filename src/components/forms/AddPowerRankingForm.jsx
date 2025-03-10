"use client";
import Image from "next/image";
import useFetchPublishers from "@/hooks/useFetchPublishers";
import { imgUpload } from "@/app/actions/imgUpload";
import { IoChevronDown } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Button } from "../ui/button";
import Swal from "sweetalert2";
import axios from "axios";

const AddPowerRankingForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select Publisher");
  const [selectedPublisher, setSelectedPublisher] = useState({});
  const [rankings, setRankings] = useState([
    { rank: 1, title: "", image: "", description: "" },
  ]);

  const handleUploadImage = () => {
    document.getElementById("image_input").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const [publishers] = useFetchPublishers();

  useEffect(() => {
    const handleClickOutside = (event) => {
      let target = event.target;

      if (!target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRankingChange = (index, field, value) => {
    if (field === "rank") return;
    const updatedRankings = [...rankings];
    updatedRankings[index][field] = value;
    setRankings(updatedRankings);
  };

  const addRanking = () => {
    setRankings([
      ...rankings,
      { rank: rankings.length + 1, title: "", image: "", description: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Form Validation -->
    if (!image) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Image Is Required!",
      });
    }

    if (
      !selectedPublisher.publisher_name &&
      !selectedPublisher.publisher_image
    ) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Publisher Is Required!",
      });
    }

    // Upload Image To imgBB
    const imageUrl = await imgUpload(image);
    if (!imageUrl) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Image Upload Failed!",
      });
    }

    // Ranking Data
    const ranking_data = {
      title: title,
      image: imageUrl,
      description: description,
      publisher: selectedPublisher.publisher_name,
      publisher_image: selectedPublisher.publisher_image,
      published_date: new Date(),
      rankings: [...rankings].reverse(),
    };

    // Post data in db --->
    try {
      const { data } = await axios.post(`/api/rankings`, ranking_data);
      // Show Unauthorized or 500 status --->
      if (data?.status === 403 || data?.status === 500) {
        Swal.fire({
          icon: "error",
          title: `${data?.status} ${data?.error}`,
          text: data?.message,
          confirmButtonColor: "#d33",
          confirmButtonText: "Ok, Understood!",
        });
      }
      // Show Confirmation Toast --->
      if (data.data?.insertedId) {
        router.refresh();
        // fetchRankings();
        router.push("/");
        Swal.fire({
          icon: "success",
          title: data.message,
          confirmButtonColor: "#000",
          confirmButtonText: "Ok, Great!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong!",
        confirmButtonColor: "#d33",
        confirmButtonText: "Try Again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 p-6 rounded space-y-4">
      {/* Title */}
      <div className="w-full">
        <label
          htmlFor="title"
          className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
        >
          Power Ranking Title
        </label>
        <input
          type="text"
          required
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Power Ranking Title"
          className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#a6a6a6] transition-colors duration-300"
        />
      </div>
      {/* Image File */}
      <div className="mb-4 flex items-center flex-col gap-5 justify-center bg-white">
        <input
          type="file"
          name="image"
          id="image_input"
          className="hidden"
          onChange={handleFileChange}
        />
        {preview === "" ? (
          <div
            className="w-full md:w-[100%] flex items-center justify-center flex-col gap-4 border-border border rounded-md py-6 cursor-pointer"
            onClick={handleUploadImage}
          >
            <FiUpload className="text-[2rem] text-[#777777]" />
            <p className="text-[#777777]">
              Browse To Upload Ranking Image File
            </p>
          </div>
        ) : (
          <div className="relative w-full md:w-[100%] rounded h-[300px]">
            <img
              src={preview}
              alt="image"
              className="w-full h-full object-cover"
            />
            <MdDelete
              className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
              onClick={() => setPreview("")}
            />
          </div>
        )}
      </div>
      {/* Description */}
      <div className="w-full">
        <label
          htmlFor="description"
          className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
        >
          Power Ranking Description
        </label>
        <textarea
          id="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Power Ranking Description"
          className="border-border border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-[#a6a6a6] transition-colors duration-300"
        />
      </div>
      {/* Select Publisher */}
      <div className="w-full">
        <label
          htmlFor="publisher"
          className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
        >
          Select Publisher
        </label>
        <button
          type="button"
          className="bg-[#fff] border border-[#d1d1d1] rounded-md w-full justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown mt-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedItem}
          <IoChevronDown
            className={`${
              isDropdownOpen ? "rotate-[180deg]" : " rotate-0"
            } transition-all duration-300 text-[1.2rem]`}
          />
          <div
            className={`${
              isDropdownOpen
                ? "z-[1] opacity-100 scale-[1]"
                : "z-[-1] opacity-0 scale-[0.8]"
            } w-full absolute bottom-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-wrap justify-center gap-4 overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
              boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
            }}
          >
            {publishers?.map((option, index) => (
              <div
                className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                key={index}
                onClick={() => {
                  setSelectedItem(option.publisher_name);
                  setSelectedPublisher({
                    publisher_name: option.publisher_name,
                    publisher_image: option.image,
                  });
                }}
              >
                <Image
                  src={option.image}
                  alt={option.publisher_name}
                  width={1000}
                  height={100}
                  className="w-28 h-12 rounded"
                />
              </div>
            ))}
          </div>
        </button>
      </div>
      {/* Rankings */}
      <div className="w-full">
        <div className="flex items-center gap-4 mb-1">
          <h3 className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]">
            All Rankings
          </h3>
        </div>
        <div
          className={`grid gap-4 bg-white shadow p-4 border rounded ${
            rankings.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {rankings.map((ranking, index) => (
            <div
              key={index}
              className="space-y-4 border-border border p-4 rounded"
            >
              {/* Rank */}
              <div className="w-full">
                <label
                  htmlFor={`rank-${index}`}
                  className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
                >
                  Rank
                </label>
                <input
                  type="number"
                  readOnly
                  name={`rank-${index}`}
                  value={index + 1}
                  className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#a6a6a6] transition-colors duration-300"
                />
              </div>

              {/* Team Name */}
              <div className="w-full">
                <label
                  htmlFor={`teamName-${index}`}
                  className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
                >
                  Title
                </label>
                <input
                  type="text"
                  required
                  name={`teamName-${index}`}
                  value={ranking.title}
                  onChange={(e) =>
                    handleRankingChange(index, "title", e.target.value)
                  }
                  placeholder="Enter Title"
                  className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#a6a6a6] transition-colors duration-300"
                />
              </div>

              {/* Image URL */}
              <div className="w-full">
                <label
                  htmlFor={`rankingImage-${index}`}
                  className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
                >
                  Image URL
                </label>
                <input
                  type="url"
                  required
                  name={`rankingImage-${index}`}
                  value={ranking.image}
                  onChange={(e) =>
                    handleRankingChange(index, "image", e.target.value)
                  }
                  placeholder="Enter Image URL"
                  className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#a6a6a6] transition-colors duration-300"
                />
              </div>

              {/* Description */}
              <div className="w-full">
                <label
                  htmlFor={`rankingDescription-${index}`}
                  className="flex items-center gap-2 text-[18px] text-text text-gray-700 font-[600]"
                >
                  Description
                </label>
                <textarea
                  id={`rankingDescription-${index}`}
                  required
                  value={ranking.description}
                  onChange={(e) =>
                    handleRankingChange(index, "description", e.target.value)
                  }
                  placeholder="Enter Description"
                  className="border-border border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-[#a6a6a6] transition-colors duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="w-full mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
        {/* Add Ranking Button */}
        <Button
          type="button"
          variant="outline"
          onClick={addRanking}
          className="bg-white border border-gray-300 rounded font-semibold hover:bg-gray-100 transition-all duration-200"
        >
          Add Ranking
        </Button>
        {/* Remove Ranking Button */}
        {rankings.length > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              if (rankings.length > 1) {
                setRankings(rankings.slice(0, -1));
              }
            }}
            className="bg-white border border-gray-300 rounded font-semibold px-4 py-2 hover:bg-gray-100 transition-all duration-200"
          >
            Remove Ranking
          </Button>
        )}
        {/* Post Power Ranking Button */}
        <Button
          disabled={loading}
          type="submit"
          className="w-full sm:w-2/3 flex items-center justify-center gap-2 font-semibold text-[16px] disabled:opacity-50"
        >
          {loading ? (
            <>
              <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              <span className="mt-[2px]">Posting...</span>
            </>
          ) : (
            "Post Power Ranking"
          )}
        </Button>
      </div>
    </form>
  );
};

export default AddPowerRankingForm;
