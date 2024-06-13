import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      url: "/",
      title: "Karyawan",
    },
    {
      url: "jabatan",
      title: "Jabatan",
    },
    {
      url: "departement",
      title: "Departement",
    },
  ];

  return (
    <div className="text-base font-bold text-center border-b border-gray-200">
      <ul className="flex flex-wrap -mb-px">
        {links.map((item, index) => (
          <li className="me-2" key={index}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 transition-all ${
                  isActive && "border-b-2 border-blue-600 text-blue-600"
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
