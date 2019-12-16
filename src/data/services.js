import React from "react"
import mowing from "../images/A1.jpg"
import landscaping from "../images/B1.jpg"
import flagstone from "../images/C1.jpg"
import bedMaintenance from "../images/D1.jpg"
import fertilizer from "../images/fert.jpg"
import leaves from "../images/leaves.jpg"
import treetrimming from "../images/treetrimming.jpeg"

const services = [
  {
    name: "Mowing and Edging",
    description:
      "Only using the best, professional-grade equipment, our technicians take the time to make sure we leave your yard looking spectacular every week.",
    image: <img src={mowing} alt="Mowing" />,
  },

  {
    name: "Landscaping",
    description:
      "Perspectiv Gardens offers a wide range of landscaping services. We take great pride in making our clients happy with the quality of our work and the products we use to create your dream landscape.",
    image: <img src={landscaping} alt="Landscaping" />,
  },
  {
    name: "Flagstone",
    description:
      "A flagstone pathway or patio is what sets off any landscape. Our years of flagstone design and installation is what separates us from the others.",
    image: <img src={flagstone} alt="Flagstone" />,
  },
  {
    name: "Bed Maintenance",
    description:
      "We'll do the tedious work for you. Whether it's weeding, laying down some fresh mulch, or bringing more color to your flower beds, Perspectiv has you covered.",
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
      "From leaf removal to lawn aeration and fertilization, Perspectiv Gardens is committed to excellent lawn care in the Dallas area.",
    image: <img src={leaves} alt="Rake and Bag Leaves" />,
  },
  {
    name: "Fertilization",
    description:
      "From leaf removal to lawn aeration and fertilization, Perspectiv Gardens is committed to excellent lawn care in the Dallas area.",
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
