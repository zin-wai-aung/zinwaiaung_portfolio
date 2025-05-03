const portfolioProjects = [
  {
    name: "Web Development",
    projects: [
      {
        id: 1,
        title: "Cre8tionNet | Digital Asset Platform",
        description:
          "Cre8tionNet is a passion project built using the MERN stack with Tailwind CSS for styling and Zustand for state management. I created this platform to help digital creators access free design resources and eventually allow contributors to upload and monetize their work.",
        detailDescription: `The frontend is powered by React and styled with Tailwind CSS for a sleek and responsive interface. I used Zustand for global state handling , Framer Motion and engaging UI feedback. Asset data and user interactions are fetched efficiently using SWR and Axios.

For backend operations, I set up Node.js with Express and MongoDB to store and retrieve asset metadata and contact form entries. I integrated Cloudinary for image uploads and optimizations. Users can reach out via a contact form powered by Nodemailer and Brevo Mail API for professional email delivery.`,
        tools: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Tailwind CSS",
          "Zustand",
          "SWR",
          "Cloudinary",
          "Nodemailer",
          "Framer Motion",
          "Axios",
        ],
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ScreenMockup-07_n0buos.jpg",
        detailImages: [
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-11_zf8dhi.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-01_knn7yu.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-09_oexqto.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-10_k4tewd.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-04_bynmmr.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-07_mllci4.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNetScreenMockup-06_bn6ojv.jpg",
        ],
        codeLink: null,
        demoLink: "https://cre8tionnet.up.railway.app/",
        isDetail: true,
      },
      {
        id: 2,
        title: "IT Creation Official Website",
        description:
          "A modern and feature-rich website showcasing services, projects, and professional expertise. Designed with a focus on aesthetics, functionality, and smooth user experience, the website highlights web development and graphic design services.",
        tools: ["React", "Tailwind", "Zustand", "EmailJS", "Framer Motion"],
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ITCreation_ww08x1.jpg",
        detailImages: [
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ITCreation1_hpdm2e.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ITCreation2_cesgce.jpg",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ITCreation3_dzsyi3.jpg",
        ],
        codeLink: null,
        demoLink: "https://itcreation.netlify.app/",
        isDetail: true,
      },
      {
        id: 3,
        title: "Invoice Generator App",
        description:
          "Invoice Generator is a modern, responsive invoice management tool built using React and Tailwind CSS. It features real-time data fetching, authentication, and download functionality, making it ideal for freelancers and businesses alike.",
        detailDescription: `This application is crafted with React and styled using Tailwind CSS for a clean and responsive design. State management is handled with Zustand, providing a lightweight and scalable solution. API interactions are managed using Axios, while SWR optimizes data fetching and caching for a smoother experience.

I integrated a Laravel-based backend (not self-hosted) to fetch and store invoice data securely. A debounce input system enhances the search experience, reducing unnecessary API calls. Skeleton loaders ensure a polished UI during loading states. Users can authenticate to access protected routes and download invoices as PDFs.`,
        tools: [
          "React",
          "Tailwind CSS",
          "Zustand",
          "Axios",
          "SWR",
          "Laravel API",
          "React Router",
          "Debounce",
          "Skeleton Loader",
        ],
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/InvoicerApp_jrlxub_tctgpt.jpg",
        detailImages: [
          "https://res.cloudinary.com/da7vqcwkp/image/upload/invoice_public_zghjew.png",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-01-11_at_3.49.01_PM_fafloe.png",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-01-11_at_4.04.23_PM_qsam8q.png",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-01-11_at_4.06.41_PM_hkfqir.png",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-01-11_at_3.56.28_PM_jltgll.png",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-01-11_at_4.02.03_PM_bbbfe2.png",
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-01-11_at_4.19.51_PM_brf2au.png",
        ],
        codeLink: "https://github.com/zin-wai-aung/Invoice_APP_React",
        demoLink: "https://invoicegeneratorbyzin.netlify.app",
        isDetail: true,
      },
      {
        id: 4,
        title: "Contact Number Authorization App",
        description:
          "The Invoice App is a secure and feature-rich web application designed to streamline product sales and invoice management. To ensure data security and personalized access, the app includes user authorization functionality. Users must register and log in to access the application's core features. Without an account, users cannot create products or vouchers, ensuring that only authorized users can manage and manipulate data. This robust authorization system provides a secure environment for managing business operations and demonstrates advanced full-stack development skills.",
        tools: ["React", "Tailwind", "Zustand", "Authorization"],
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Screen_Shot_2025-05-03_at_1.26.06_PM_osunx0.png",
        codeLink: "https://github.com/zin-wai-aung/React-Contact-App-Project",
        demoLink:
          "https://www.linkedin.com/posts/zin-wai-aung_react-reactjs-javascript-activity-7187081784533102592-RKxg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADraq34B62hW_s5xGzlP-ii9FDBOwWFInlI",
        isDetail: false,
      },
      {
        id: 5,
        title: "Memory Match Game App",
        description:
          "Welcome to the Memory Match Game project! 🎮 This project is a fun and interactive memory game built with React.js and Tailwind CSS. The game challenges players to match pairs of fruit icons within a time limit. The project is designed to help beginners learn React by building a functional and visually appealing game.",
        tools: ["React", "Tailwind", "Context Api", "react confetti"],
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/MemoryGame_wkgvh2.jpg",
        detailImages: [
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Holding_Phone_Mockup_tnmqzp.jpg",
        ],
        codeLink: "https://github.com/zin-wai-aung/Memory_Match_Game_React",
        demoLink: "https://memorycheckgame.netlify.app/",
        isDetail: true,
      },
      {
        id: 6,
        title: "Moving Car Animation with Traffic Lights",
        description:
          "Moving car animation with traffic lights using HTML, CSS, and JavaScript. This project demonstrates how to control the car's movement and traffic light changes.",
        tools: ["HTML", "CSS", "Javascript"],
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/CarAnimation_f1u6yz.png",
        codeLink: "https://github.com/zin-wai-aung/Moving_Car_Animation_JS",
        demoLink: "https://movingcaranimationtrafficlight.netlify.app/",
        isDetail: true,
      },
    ],
  },
  {
    name: "Logo Branding",
    projects: [
      {
        id: 0,
        title: "Logo Folio | Logo Collection",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/LogoCollection1_lphi0q.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/182850951/Portfolio-Logo-Folio-Logo-Collections",
        isDetail: false,
      },
      {
        id: 1,
        title: "Visionary Heights Branding",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/VisionaryHeights_q6qxzw.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/182663413/Logo-Brand-identity-for-Visionary-Heights",
        isDetail: false,
      },
      {
        id: 2,
        title: "A Thee Zayy Brand & Identity",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ATheeZayy_r39qwm.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/183846429/AThee-Zay-Fruit-Shop-Logo-Branding",
        isDetail: false,
      },
      {
        id: 3,
        title: "Glam Candy Logo Design",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/GlamCandy_rt76pr.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/189300315/Glam-Candy-Logo-Branding-Modern-Logo",
        isDetail: false,
      },
      {
        id: 4,
        title: "Cre8tionNet Brand Identity",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Cre8tionNet_fjw0cr.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224960313/Cre8tionNet-Logo-Branding",
        isDetail: false,
      },
      {
        id: 5,
        title: "In The Nude Skincare Logo",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/IntheNude_l4ekac.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224963167/In-The-Nude-Skincare-Logo-Design",
        isDetail: false,
      },
      {
        id: 6,
        title: "Nay Chi Branded Collection",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/NayChi_hygqmj.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224976195/NayChi-Branded-Collection-Logo-Design",
        isDetail: false,
      },
      {
        id: 7,
        title: "Shwe Khae Khitt Brand & Identity",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/ShweKhaeKhitt_yhepaq.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224974983/ShweKhatKhitt-Construction-Logo-Design",
        isDetail: false,
      },
      {
        id: 8,
        title: "Win Pharmacy Brand & Identity",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Win_aoh8h5.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/183999181/Win-Pharmacy-Logo-Branding",
        isDetail: false,
      },
      {
        id: 9,
        title: "Phyo Logo Design",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Phyo_kq6hpc.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224976913/Phyo-Food-Logo-Design",
        isDetail: false,
      },
      {
        id: 10,
        title: "Kan Htoo Potato Chips Logo",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/KanHtoo_zugip8.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224979617/Kan-Htoo-Potato-Chips-Logo-Design",
        isDetail: false,
      },
      {
        id: 11,
        title: "PyaeSone Kywal Wa Logo Design",
        description:
          "Designed a series of modern, minimalistic logos for various brands and startups.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/PSKW_vkgeaa.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224974605/Construction-Logo-Branding",
        isDetail: false,
      },
    ],
  },
  {
    name: "Graphic Design",
    projects: [
      {
        id: 1,
        title: "Asia Traditional Medicine Packaging Design",
        description:
          "Created eye-catching posters and flyers for events and marketing campaigns.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Asia_w7jqeb.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224985585/Myanmar-Traditional-Medicine-Packaging-Box-Design",
        isDetail: false,
      },
      {
        id: 2,
        title: "AD Rice Packaging Bag Design",
        description:
          "A modern and eye-catching rice bag packaging design, designed to enhance shelf appeal and brand recognition with bold typography and natural color tones. Perfect for premium rice brands seeking a fresh, trustworthy look.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/AD_zxmjgk.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/182962971/Rice-Bag-Packaging-Design",
        isDetail: false,
      },
      {
        id: 3,
        title: "Mobile Shop Social Media Design",
        description:
          "Created eye-catching posters and flyers for events and marketing campaigns.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Social_Media_Mockup_lzazsj.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224983947/Mobile-Shop-Social-Media-Post-Design",
        isDetail: false,
      },
      {
        id: 4,
        title: "Rainbow Pamphlet Bi-Folded Design",
        description:
          "Created eye-catching posters and flyers for events and marketing campaigns.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Rainbow_h4wv3m.jpg",
        codeLink: null,
        demoLink: "",
        isDetail: false,
      },
      {
        id: 5,
        title: "Strong Build Social Media Design",
        description:
          "Created eye-catching posters and flyers for events and marketing campaigns.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Tablets_zf7u6n.jpg",
        codeLink: null,
        demoLink: "",
        isDetail: false,
      },

      {
        id: 6,
        title: "Company Profile Book Design",
        description:
          "A clean and modern Company Profile Book Design crafted to present a brand’s identity, services, and values in a professional and visually engaging format. The layout balances typography, imagery, and white space for easy readability, making it ideal for corporate presentations and client introductions.",
        tools: null,
        image:
          "https://res.cloudinary.com/da7vqcwkp/image/upload/Free_A4_Brochure_Mockup_6_thp1mq.jpg",
        codeLink: null,
        demoLink:
          "https://www.behance.net/gallery/224982579/Company-Profile-Book-Design",
        isDetail: false,
      },
    ],
  },
];

export default portfolioProjects;
