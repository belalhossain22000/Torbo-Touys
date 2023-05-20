import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GallerySection = () => {
  const images = [
    "https://img.freepik.com/free-photo/robot-washing-car_1048-3601.jpg?w=900&t=st=1684571051~exp=1684571651~hmac=3cdf05e15a4e3d5275ef4b3dabc1029acd438810982f7b9036cf2a055653ce39",
    "https://img.freepik.com/free-psd/3d-illustration-racing-children-s-toy-car_23-2149345299.jpg?w=740&t=st=1684571051~exp=1684571651~hmac=3145b7a5f876ea0fb68a3544e51f50fc14492fd50251765cd3de6f6c27d19a10",
    "https://img.freepik.com/free-vector/yellow-sports-car_1308-96215.jpg?w=996&t=st=1684571285~exp=1684571885~hmac=f77172045af0250aeaf7a59b242ea73d6550be474795dac98a984b3ac7e89fbe",
    "https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?w=740&t=st=1684571414~exp=1684572014~hmac=17219839da441aa82160239c4172f28582e2bd5254b12a2ad9e497cee83c1363",
    "https://img.freepik.com/free-vector/isometric-vehicle_24877-50908.jpg?w=740&t=st=1684571492~exp=1684572092~hmac=4dfc8cfdb4f45ef06d4c38f46ad610b8da3d55febf232b752504b9627bee8b8a",
    "https://img.freepik.com/free-photo/black-car-with-red-yellow-stripes-red-hood_1340-37127.jpg?w=740&t=st=1684571591~exp=1684572191~hmac=d9302cdd47a75651aa99068885273c92fbd056ed6bf26ffeb5e7e5827e1abeed",
    "https://img.freepik.com/free-photo/fun-hippo-3d-illustration_183364-81056.jpg?w=826&t=st=1684571764~exp=1684572364~hmac=abc885c39411225c4aa54effe9fee2efba8842e33a127e105029fd9a68a5d363",
    "https://img.freepik.com/free-photo/fun-trex-3d-illustration_183364-81258.jpg?w=740&t=st=1684571824~exp=1684572424~hmac=2dcff10da69e37ff8c11ec653d52ac852347b930094a84bb3b78f324c5e212f2",
    "https://img.freepik.com/free-photo/red-car-with-christmas-ball-top_1252-296.jpg?w=740&t=st=1684571890~exp=1684572490~hmac=80e5be5de1f28735406892efb2c357b980d7fde4b07048366d6eeb76d006e989",
    "https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81225.jpg?w=740&t=st=1684571996~exp=1684572596~hmac=1fc4a4d5e477403d209ad142c13b660662dd411e155175f7bd539f283aa13ec8",
  ];
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-purple-100 py-8 my-12">
      <h2 className="text-5xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
