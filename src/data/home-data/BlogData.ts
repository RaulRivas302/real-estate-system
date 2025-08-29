interface DataType {
   id: number;
   page: string;
   class_name: string;
   date: string;
   info_name: string;
   info_time: number;
   title: string;
   data_delay_time?: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      class_name: "blog-item-1",
      date: "09 FEB",
      info_name: "Michael Scott",
      info_time: 6,
      title: "Spending Habits, 13 Tips for Grow Your Money.",
   },
   {
      id: 2,
      page: "home_2",
      class_name: "blog-item-2",
      date: "12 AUG",
      info_name: "Chris Johnson",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
      data_delay_time: "0.1s",
   },

   {
      id: 1,
      page: "home_4",
      class_name: "blog-item-1",
      date: "08 JAN",
      info_name: "James Roberts",
      info_time: 8,
      title: "Print, Publishing Qui Visual UX Layout Mockups.",
   },
   {
      id: 2,
      page: "home_4",
      class_name: "blog-item-2",
      date: "17 AUG",
      info_name: "David Taylor",
      info_time: 7,
      title: "Designer’s Checklist for Every UX/UI Project.",
   },
   {
      id: 3,
      page: "home_4",
      class_name: "blog-item-3",
      date: "21 SEP",
      info_name: "Jennifer Adams",
      info_time: 8,
      title: "Spending Habits, 13 Tips for Grow Your Money.",
   },
]

export default blog_data;
