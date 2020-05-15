import {
  Dashboard,
  Category,
  Slideshow,
  Inbox,
  LocalOffer,
  People,
  ContactSupport
} from "@material-ui/icons";
import DashboardPage from "./views/Dashboard";
import Sliders from "./views/Sliders";
import Categories from "./views/Categories";
import SubCategories from "./views/SubCategories";
import SubSubCategories from "./views/SubSubCategories";
import Products from "./views/Products";
import Offers from "./views/Offers";
import About from "./views/About";
import DealerEnquiries from "./views/DealerEnqueries";
import ContactEnquiries from "./views/ContactEnquiries";
import FeaturedProducts from "./views/FeaturedProducts";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/about-us",
    name: "About Us",
    icon: People,
    component: About,
    layout: "/admin"
  },
  {
    path: "/sliders",
    name: "Sliders",
    icon: Slideshow,
    component: Sliders,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: Category,
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/sub-categories",
    name: "Sub Categories",
    icon: Category,
    component: SubCategories,
    layout: "/admin"
  },
  {
    path: "/sub-sub-categories",
    name: "Sub Sub Categories",
    icon: Category,
    component: SubSubCategories,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: Inbox,
    component: Products,
    layout: "/admin"
  },
  {
    path: "/featuredProducts",
    name: "Featured Products",
    icon: Inbox,
    component: FeaturedProducts,
    layout: "/admin"
  },
  {
    path: "/offers",
    name: "Offers",
    icon: LocalOffer,
    component: Offers,
    layout: "/admin"
  },
  {
    path: "/dealer-enquiries",
    name: "Dealer Enquiries",
    icon: ContactSupport,
    component: DealerEnquiries,
    layout: "/admin"
  },
  {
    path: "/contact-enquiries",
    name: "Contact Enquiries",
    icon: ContactSupport,
    component: ContactEnquiries,
    layout: "/admin"
  }
];

export default dashboardRoutes;
