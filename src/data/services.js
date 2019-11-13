import React from "react"
import bedMaintenance from "../images/lawn-bed-maintenance.jpg"
import fertilizer from "../images/fert.jpg"
import flagstone from "../images/landscape-hardscape.jpg"
import leaves from "../images/leaves.jpg"
import treetrimming from "../images/treetrimming.jpeg"

const services = [
  {
    name: "Mowing and Edging",
    description:
      "Yard mowing and garden edging can overhaul a property’s curb appeal. The knowledgeable technicians at Perspectiv Gardens use professional-grade equipment to give customers a perfectly manicured lawn.",
    image: (
      <img
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Mowing"
      />
    ),
  },

  {
    name: "Landscaping",
    description:
      "No matter how big or how small the space, your landscape offers opportunities to raise your property’s market value",
    image: (
      <img
        src="https://images.unsplash.com/photo-1553524808-eef8eb03cf29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Landscaping"
      />
    ),
  },
  {
    name: "Flagstone",
    description:
      "No matter how big or how small the space, your landscape offers opportunities to raise your property’s market value",
    image: <img src={flagstone} alt="Flagstone" />,
  },
  {
    name: "Bed Maintenance",
    description:
      "No matter how big or how small the space, your landscape offers opportunities to raise your property’s market value",
    image: <img src={bedMaintenance} alt="Bed Maintenance" />,
  },
  {
    name: "Shurb and Tree Trimming",
    description:
      "During the peak growing season and the off-peak winter months, caring for the trees, shrubs, and bushes in your yard is key to having a well-manicured, flourishing lawn.",
    image: <img src={treetrimming} alt="Shurb and Tree Trimming" />,
  },
  {
    name: "Rake and Bag Leaves",
    description:
      "From leaf removal to lawn aeration and fertilization, Yepez Maintenance Service is commitment to excellent lawn care in the Dallas area.",
    image: <img src={leaves} alt="Rake and Bag Leaves" />,
  },
  {
    name: "Fertilization",
    description:
      "From leaf removal to lawn aeration and fertilization, Yepez Maintenance Service is commitment to excellent lawn care in the Dallas area.",
    image: <img src={fertilizer} alt="Fertilization" />,
  },
  {
    name: "Weed and Insect Control",
    description:
      "Weeds and pests are nuisances that can destroy the beauty of your landscape, and if not addressed in a timely manner, they can cause costly damage to your property as well.",
    image: <img src={fertilizer} alt="Weed and Insect Control" />,
  },
]

export default services
