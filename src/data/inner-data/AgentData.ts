import { StaticImageData } from "next/image";

import agentThumb_1 from "@/assets/images/agent/img_07.jpg";
import agentThumb_2 from "@/assets/images/agent/img_08.jpg";
import agentThumb_3 from "@/assets/images/agent/img_09.jpg";
import agentThumb_4 from "@/assets/images/agent/img_10.jpg";
import agentThumb_5 from "@/assets/images/agent/img_11.jpg";
import agentThumb_6 from "@/assets/images/agent/img_12.jpg";
import agentThumb_7 from "@/assets/images/agent/img_13.jpg";
import agentThumb_8 from "@/assets/images/agent/img_14.jpg";
import agentThumb_9 from "@/assets/images/agent/img_15.jpg";
import agentThumb_10 from "@/assets/images/agent/img_16.jpg";
import agentThumb_11 from "@/assets/images/agent/img_17.jpg";
import agentThumb_12 from "@/assets/images/agent/img_18.jpg";

interface DataType {
   id: number;
   thumb: StaticImageData;
   tag: string;
   title: string;
   data_delay_time?: string;
}

const inner_agent_data: DataType[] = [
   {
      id: 1,
      thumb: agentThumb_1,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 2,
      thumb: agentThumb_2,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 5,
      thumb: agentThumb_5,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 6,
      thumb: agentThumb_6,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 9,
      thumb: agentThumb_9,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 10,
      thumb: agentThumb_10,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 13,
      thumb: agentThumb_9,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 14,
      thumb: agentThumb_10,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 17,
      thumb: agentThumb_5,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 18,
      thumb: agentThumb_6,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 21,
      thumb: agentThumb_1,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 22,
      thumb: agentThumb_2,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 25,
      thumb: agentThumb_5,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 26,
      thumb: agentThumb_6,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 29,
      thumb: agentThumb_1,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 30,
      thumb: agentThumb_2,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 33,
      thumb: agentThumb_1,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 34,
      thumb: agentThumb_2,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 37,
      thumb: agentThumb_5,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 38,
      thumb: agentThumb_6,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

   {
      id: 41,
      thumb: agentThumb_9,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 42,
      thumb: agentThumb_10,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },


   {
      id: 45,
      thumb: agentThumb_5,
      tag: "7 Listing",
      title: "Chris Matial",
   },
   {
      id: 46,
      thumb: agentThumb_6,
      tag: "3 Listing",
      title: "Mark Filo",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      thumb: agentThumb_3,
      tag: "3 Listings",
      title: "John Doe",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      thumb: agentThumb_4,
      tag: "2 Listings",
      title: "Emily Harper",
      data_delay_time: "0.3s",
   },

]

export default inner_agent_data;