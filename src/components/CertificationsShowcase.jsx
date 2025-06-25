import React from "react";

const certifications = [
    {
    title: "AWS re/Start Graduate",
    image: '/badges/aws-re-start-graduate.png',
    link: "https://www.credly.com/badges/cbcb25f8-d3b9-4a78-9f49-1fe29bdd6a63/public_url",
    },
    {
    title: "AWS Certified Cloud Practitioner",
    image: "/badges/aws-cpc.png", // 📁 public/certifications/aws-cpc.png
    link: "https://www.credly.com/badges/23f057c8-2382-44a3-af79-fde8c49cd0eb/public_url",
  },
  {
    title: "AWS Cloud Quest – Practitioner",
    image: "/badges/aws-cloud-quest-badge.png",
    link: "https://www.credly.com/badges/e1ba57ce-7789-41df-a173-4bcd116aa1b4/public_url",
  },
];

export default function CertificationsShowcase() {
  return (
    <section id="certifications-showcase" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          AWS Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {cert.title}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
